import GenericDB from './generic-db'

export default class WidgetsDB extends GenericDB {
  constructor(userId, accountId) {
    super(`users/${userId}/accounts/${accountId}/widgets`)
  }

  // Here you can extend UserAccountsDB with custom methods
}
