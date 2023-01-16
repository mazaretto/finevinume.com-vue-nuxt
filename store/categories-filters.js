export const state = () => ({
  countries: ['Q']
})

export const getters = {
  countries (state) {
    return state.countries
  }
}

export const mutations = {
  SET_COUNTRIES (state, payload) {
    state.countries = payload.splice(0, 2)
  }
}

export const actions = {}

export default {
  state,
  mutations,
  getters,
  actions
}
