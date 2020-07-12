import { find } from 'lodash'

export default {
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
   * Get account by id
   */
  listAccounts: state => () => state.accounts
}
