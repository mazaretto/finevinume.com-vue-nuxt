export const state = () => ({
  wishcolls: []
})

export const mutations = {
  UPDATE_WISHCOLLS (state, payload) {
    state.wishcolls = payload
  }
}

export const actions = {
  async ADD_TO_WISHCOLLS ({ dispatch }, payload) {
    try {
      const response = await this.$axios.$post('wishcolls', payload)

      dispatch('RECIEVE_WISHCOLLS')

      return response
    } catch (e) {
      console.log(e)
    }
  },
  async REMOVE_FROM_WISHCOLLS ({ dispatch }, payload) {
    try {
      const response = await this.$axios.$post('/wishcolls/destroy', payload)

      dispatch('RECIEVE_WISHCOLLS')

      return response
    } catch (e) {
      console.log(e)
    }
  },
  async RECIEVE_WISHCOLLS ({ commit }) {
    try {
      const response = await this.$axios.$get('wishcolls')
      commit('UPDATE_WISHCOLLS', response.data)
    } catch (err) {
      console.log(err)
    }
  }
}

export const getters = {
  wishlist (state) {
    return state.wishcolls.filter(item => item.type_coll === 1)
  },
  collection (state) {
    return state.wishcolls.filter(item => item.type_coll === 0)
  }
}
