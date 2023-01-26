export const state = () => ({
  cookie: false
})

export const getters = {
  COOKIE (state) {
    return state.cookie
  }
}

export const mutations = {
  SET_COOKIE (state, payload) {
    state.cookie = payload
  }
}

export default {
  state,
  getters,
  mutations
}
