import { isNil } from 'lodash'

export default {
  isUserLoggedIn: state => !isNil(state.user),
  getPin: state => state.user.auth.pin
}
