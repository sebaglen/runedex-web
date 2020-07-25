import WidgetsDB from '@/firebase/user-account-widgets-db'
import 'firebase/functions'

export default {
  /**
   * Fetch widgets of current widget user
   */
  getWidgets: async ({ rootState, commit }, accountId) => {
    if (!accountId) return
    commit('startWidgetFetching', { accountId })
    const widgetsDb = new WidgetsDB(rootState.authentication.user.id, accountId)

    const widgets = await widgetsDb.readAll()
    commit('setWidgets', { widgets, accountId })
    commit('completeWidgetFetching', { accountId })
  },

  /**
   * Add a widget to an account
   */
  addWidget: async (
    { rootState, commit, dispatch, getters },
    { type, accountId }
  ) => {
    if (getters.isWidgetRegistrationPending()) return

    const widgetsDb = new WidgetsDB(rootState.authentication.user.id, accountId)

    commit('setWidgetRegistrationPending', true)
    widgetsDb.create({ type, config: { sampleConfig: true } })
    dispatch('getWidgets')
    commit('setWidgetRegistrationPending', false)
  }
}
