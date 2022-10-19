<template>
  <div class="the-header-profile">
    <span v-if="!$auth.loggedIn" class="the-header-profile__no-auth">
      <span class="the-header-profile__login" @click="OPEN_MODAL('login')">
        Login
      </span>
      |
      <span class="the-header-profile__register" @click="OPEN_MODAL('register')">
        Registration
      </span>
    </span>
    <div
      v-else
      class="the-header-profile__auth"
      @mouseenter="active = !active"
      @mouseleave="active = !active"
    >
      <v-avatar small />
      <span class="the-header-profile__greeting">Welcome, {{ $auth.user.name }}</span>
      <the-header-dropdown v-if="active" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    ...mapMutations({
      OPEN_MODAL: 'auth-modal/OPEN_MODAL'
    })
  }
}
</script>

<style lang="scss">
.the-header-profile {
  display: flex;
  align-items: center;
  width: 180px;
  height: 40px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.the-header-profile__no-auth {
  margin-left: auto;
}

.the-header-profile__login,
.the-header-profile__register {
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
}

.the-header-profile__auth {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.the-header-profile__greeting {
  max-width: 135px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
