export default {
  /* Widgets */
  setWidgets: (state, { widgets, accountId }) =>
    (state.widgets[accountId] = widgets),
  addWidget: (state, { widget, accountId }) =>
    state.widgets[accountId].push(widget),
  removeWidgetById: (state, { widgetId, accountId }) => {
    const index = state.widgets[accountId].findIndex(
      widget => widget.id === widgetId
    )
    state.widgets.splice(index, 1)
  },

  /* Widgets deletion */
  addWidgetDeletionPending: (state, widgetId) =>
    state.widgetDeletionPending.push(widgetId),
  removeWidgetDeletionPending: (state, { widgetId, accountId }) => {
    const index = state.widgets[accountId].findIndex(
      widget => widget.id === widgetId
    )
    state.widgetDeletionPending.splice(index, 1)
  },

  /* Widget registration */
  setWidgetRegistrationPending: (state, value) =>
    (state.widgetRegistrationPending = value)
}
