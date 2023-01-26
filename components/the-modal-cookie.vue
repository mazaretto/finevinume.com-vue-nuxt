<template>
  <div class="overlay">
    <transition name="modal" @before-enter="open" @after-leave="close">
      <div v-show="active" class="v-modal">
        <div class="container v-modal__container">
          <svg-cross class="cookie-modal__close" @click="SET_COOKIE(false)" />
          <p>
            We use necessary cookies to make our site work. We’d like to set
            additional cookies to understand site usage, make site improvements
            and to remember your settings. We also use cookies set by other
            sites to help deliver content from their services. View ourCookie
            Notice
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import SvgCross from '~/assets/icons/cross.svg?inline'

export default {
  components: {
    SvgCross
  },
  props: {
    active: {
      type: Boolean
    }
  },
  methods: {
    ...mapMutations({
      SET_COOKIE: 'cookie/SET_COOKIE'
    }),
    open () {
      const body = document.querySelector('body')
      const padding = window.innerWidth - body.clientWidth + 'px'

      body.style.overflow = 'hidden'
      body.style.paddingRight = padding
    },
    close () {
      const body = document.querySelector('body')

      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-modal__close {
  border: none;
  cursor: pointer;
  width: 18px;
  height: 17px;
  align-self: flex-end;
}
.cookie-modal__close {
  fill: #f2f2f2;
  margin-bottom: 30px;
}
.cookie-modal__close:hover {
  fill: #bdbdbd;
}
.container {
  display: flex;
  flex-flow: column;
}
.v-modal {
  position: fixed;
  display: flex;
  background-color: rgba(#000, 0.6);
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.v-modal__container {
  padding: 25px 40px 60px 40px;
  margin: auto;
  background-color: white;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .v-modal-lightbox {
    transform: translateY(200px);
  }
}
</style>
