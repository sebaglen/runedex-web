export default {
  /* Widgets */
  setWidgets: (state, { widgets, accountId }) =>
    (state.widgets = { ...state.widgets, [accountId]: widgets }),
  addWidget: (state, { widget, accountId }) =>
    (state.widgets = {
      ...state.widgets,
      [accountId]: [...state.widgets[accountId], widget]
    }),

  /* Widget registration */
  setWidgetRegistrationPending: (state, value) =>
    (state.widgetRegistrationPending = value),

  /* Widget fetching in progress for this account */
  startWidgetFetching: (state, { accountId }) =>
    (state.fetchingWidgetsForAccount = [
      ...state.fetchingWidgetsForAccount,
      accountId
    ]),

  /* Widget fetching completed for this account */
  completeWidgetFetching: (state, { accountId }) =>
    (state.fetchingWidgetsForAccount = state.fetchingWidgetsForAccount.filter(
      a => a !== accountId
    ))
}
