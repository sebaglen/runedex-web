import { find } from 'lodash'

export default {
  /**
   * Initial load of this module is in progress
   */
  loading: state => state.loading,
  /**
   * Check if a account has deletion pending
   */
  isAccountDeletionPending: state => accountId =>
    state.accountDeletionPending.includes(accountId),

  /**
   * Get account by id
   */
  getAccountById: state => accountId =>
    find(state.accounts, account => account.id === accountId),

  /**
   * Get all accounts
   */
  listAccounts: state => () => state.accounts
}
