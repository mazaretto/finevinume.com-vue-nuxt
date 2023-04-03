export const state = () => ({
  authModal: false,
  authModalContext: 'register',
  successModal: false
})

export const mutations = {
  OPEN_MODAL (state, context) {
    state.authModal = true
    state.authModalContext = context
  },
  CLOSE_MODAL (state) {
    state.authModal = false
    state.successModal = false
  },
  OPEN_SUCCESS_MODAL (state) {
    state.authModal = false
    state.successModal = true
  },
  SET_MODAL_CONTEXT (state, context) {
    state.authModalContext = context
  }
}

export const actions = {
  async OPEN_ASYNC_SUCCESS_MODAL (state) {
    this.OPEN_SUCCESS_MODAL()
  }
}

export const getters = {
  authModal (state) {
    return state.authModal
  },
  authModalContext (state) {
    return state.authModalContext
  },
  successModal (state) {
    return state.successModal
  }
}
