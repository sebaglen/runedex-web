export default {
  setUser: (state, value) => (state.user = value),
  setUserPin: (state, value) => (state.user.auth.pin = value)
}
