import GenericDB from './generic-db'

export default class AccountsDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/accounts`)
  }

  // Here you can extend UserAccountsDB with custom methods
}
