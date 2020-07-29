import { isNil } from 'lodash'

export default {
  newContentAvailable: state => !isNil(state.SWRegistrationForNewContent),
  loading: (state, getters, rootState, rootGetters) =>
    rootGetters['accounts/loading'] || rootGetters['widgets/loading']
}
