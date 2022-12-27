export const state = () => ({
  products: 0,
  stores: 0,
  rates: 0,
  reviews: 0,
  colls: 0,
  users: 0
})

export const getters = {
  products (state) {
    return state.products
  },
  stores (state) {
    return state.stores
  },
  rates (state) {
    return state.rates
  },
  reviews (state) {
    return state.reviews
  },
  colls (state) {
    return state.colls
  },
  users (state) {
    return state.users
  }
}

export const mutations = {
  SET_COUNTERS (state, { items }) {
    state.products = items.products
    state.stores = items.stores
    state.rates = items.rates
    state.reviews = items.reviews
    state.colls = items.colls
    state.users = items.users
  }
}

export const actions = {
  async GET_COUNTERS (context) {
    let { data } = await this.$axios.post('/counters')
    const items = data.data
    context.commit('SET_COUNTERS', { items })
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
