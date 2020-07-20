import { find } from 'lodash'

export default {
  /**
   * Check if a widget has deletion pending
   */
  isWidgetDeletionPending: state => widgetId =>
    state.widgetDeletionPending.includes(widgetId),

  /**
   * Get widget by id
   */
  getWidgetById: state => ({ widgetId, accountId }) =>
    find(state.widgets[accountId], widget => widget.id === widgetId),

  /**
   * Get all widgets
   */
  listWidgets: state => accountId => state.widgets[accountId],

  /**
   * Check if widget registration is already in progress
   */
  isWidgetRegistrationPending: state => () =>
    state.widgets.widgetRegistrationPending
}
