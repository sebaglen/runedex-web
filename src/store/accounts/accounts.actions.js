import AccountsDB from '@/firebase/user-accounts-db'
import firebase from 'firebase/app'
import 'firebase/functions'

export default {
  /**
   * Fetch accounts of current loggedin user
   */
  getAccounts: async ({ rootState, commit, dispatch }) => {
    const accountDb = new AccountsDB(rootState.authentication.user.id)

    const accounts = await accountDb.readAll()
    commit('setAccounts', accounts)
    accounts.forEach(account => {
      dispatch('widgets/getWidgets', account.id, { root: true })
    })
  },

  /**
   * Add an account for current loggedin user
   */
  registerAccount: async ({ dispatch, commit }, accountName) => {
    commit('setAccountRegistrationPending', true)
    const res = await firebase.functions().httpsCallable('registerAccount')({
      accountName
    })

    if (!res.data.pin) {
      console.err('Failed to add account')
    }

    dispatch('getAccounts')
    commit('setAccountRegistrationPending', false)
    commit('authentication/setUserPin', res.data.pin, { root: true })
  },

  /**
   * Create a new account for current loggedin user and reset account name input
   */
  triggerRegisterAccountAction: ({ dispatch, state, commit }) => {
    if (state.accountNameToCreate === '') return

    commit('setAccountNameToRegister', '')
    dispatch('registerAccount', state.accountNameToRegister)
  },

  /**
   * Delete a user account from its id
   */
  deleteAccount: async ({ rootState, commit, getters }, accountId) => {
    if (getters.isAccountDeletionPending(accountId)) return

    const accountsDb = new AccountsDB(rootState.authentication.user.id)

    commit('addAccountDeletionPending', accountId)
    await accountsDb.delete(accountId)
    commit('removeAccountById', accountId)
    commit('removeAccountDeletionPending', accountId)
  }
}
