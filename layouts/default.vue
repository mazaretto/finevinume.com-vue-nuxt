<template>
  <div class="default-layout">
    <the-header />
    <nuxt />
    <the-footer />
    <the-modal-auth />
    <the-modal-cookie v-if="COOKIE" v-bind:active="COOKIE" />

    <transition-group
      tag="div"
      name="notification"
      class="notifications container"
    >
      <v-notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'close-mobile-modal',
  methods: {
    ...mapActions({
      RECIEVE_WISHCOLLS: 'wishcolls/RECIEVE_WISHCOLLS'
    })
  },
  created () {
    if (!this.$auth.loggedIn) {
      return false
    }
    this.RECIEVE_WISHCOLLS()
  },
  computed: {
    ...mapGetters({
      notifications: 'notifications/notifications',
      COOKIE: 'cookie/COOKIE'
    })
  }
}
</script>

<style>
/* .default-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
} */

.notifications {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 0;
  z-index: 9999;
  top: 95px;
  left: 0;
  right: 0;
}

.notification-enter-active,
.notification-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.4s;
}

.notification-leave-active {
  position: absolute;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.notification-move {
  transition-property: transform;
  transition-duration: 0.4s;
}
</style>
