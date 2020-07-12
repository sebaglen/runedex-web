export default {
  /* Account input name */
  setAccountNameToRegister: (state, accountNameToRegister) =>
    (state.accountNameToRegister = accountNameToRegister),

  /* Accounts */
  setAccounts: (state, accounts) => (state.accounts = accounts),
  addAccount: (state, account) => state.accounts.push(account),
  removeAccountById: (state, accountId) => {
    const index = state.accounts.findIndex(account => account.id === accountId)
    state.accounts.splice(index, 1)
  },

  /* Accounts deletion */
  addAccountDeletionPending: (state, accountId) =>
    state.accountDeletionPending.push(accountId),
  removeAccountDeletionPending: (state, accountId) => {
    const index = state.accounts.findIndex(account => account.id === accountId)
    state.accountDeletionPending.splice(index, 1)
  },

  /* Account registration */
  setAccountRegistrationPending: (state, value) =>
    (state.accountRegistrationPending = value)
}
