import { find } from 'lodash'

export default {
  /**
   * Get widget by id
   */
  getWidgetById: state => ({ widgetId, accountId }) =>
    find(state.widgets[accountId], widget => widget.id === widgetId),

  /**
   * Get all widgets
   */
  listWidgets: state => accountId => {
    return state.widgets[accountId] || []
  },

  /**
   * Check if widget registration is already in progress
   */
  isWidgetRegistrationPending: state => () => state.widgetRegistrationPending,

  /**
   * Check if widget fetching is in progress for any accounts
   */
  loading: state => state.fetchingWidgetsForAccount.length > 0
}
