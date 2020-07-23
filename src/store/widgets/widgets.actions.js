import WidgetsDB from '@/firebase/user-account-widgets-db'
import 'firebase/functions'
import router from '@/router'

export default {
  /**
   * Fetch widgets of current widget user
   */
  getWidgets: async ({ rootState, commit }) => {
    const { accountId } = router.app.$route.params
    if (!accountId) return
    const widgetsDb = new WidgetsDB(rootState.authentication.user.id, accountId)

    const widgets = await widgetsDb.readAll()
    commit('setWidgets', { widgets, accountId })
  },

  /**
   * Delete a widget from its id
   */
  deleteWidget: async (
    { rootState, commit, getters },
    { widgetId, accountId }
  ) => {
    if (getters.isWidgetDeletionPending(widgetId)) return

    const widgetsDb = new WidgetsDB(rootState.authentication.user.id, accountId)

    commit('addWidgetDeletionPending', widgetId)
    await widgetsDb.delete(widgetId)
    commit('removeWidgetById', widgetId)
    commit('removeWidgetDeletionPending', widgetId)
  },

  /**
   * Add a widget to an account
   */
  addWidget: async (
    { rootState, commit, dispatch, getters },
    { type, accountId }
  ) => {
    if (getters.isWidgetRegistrationPending()) return

    // const { accountId } = router.app.$route.params
    // if (!accountId) return

    const widgetsDb = new WidgetsDB(rootState.authentication.user.id, accountId)

    commit('setWidgetRegistrationPending', true)
    widgetsDb.create({ type, config: { sampleConfig: true } })
    dispatch('getWidgets')
    commit('setWidgetRegistrationPending', false)
  }
}
