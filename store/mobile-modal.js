export const state = () => ({
  modal: false
})

export const mutations = {
  CHANGE_MOBILE_MODAL (state, modal) {
    state.modal = state.modal === modal ? false : modal
  }
}

export const getters = {
  modal (state) {
    return state.modal
  }
}
