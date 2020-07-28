export default {
  setUser: (state, value) => (state.user = value),
  setUserPin: (state, pin) => (state.user.auth = { ...state.user.auth, pin })
}
