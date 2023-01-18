export const state = () => ({
  countries: []
})

export const getters = {
  countries (state) {
    if (state.countries.length === 0) {
      return ''
    }
    if (state.countries.length > 3) {
      let [first, second, third] = state.countries
      return first + ', ' + second + ', ' + third + '..'
    }
    return state.countries.join(', ')
  }
}

export const mutations = {
  SET_COUNTRIES (state, payload) {
    if (payload.length === 0) {
      return (state.countries = [])
    }
    return (state.countries = payload)
  }
}

export const actions = {}

export default {
  state,
  mutations,
  getters,
  actions
}
