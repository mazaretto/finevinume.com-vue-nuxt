export const state = () => ({
  identificator: 0,
  notifications: []
})

export const mutations = {
  ADD_NOTIFICATION (state, notification) {
    state.identificator++
    notification.id = state.identificator

    state.notifications.push(notification)
  },
  REMOVE_NOTIFICATION ({ notifications }) {
    notifications.shift()
  }
}

export const getters = {
  notifications ({ notifications }) {
    return notifications
  }
}
