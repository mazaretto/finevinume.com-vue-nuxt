<template>
  <transition
    name="modal"
    @before-enter="open"
    @after-leave="close"
  >
    <div class="v-modal" v-show="active">
      <div class="container v-modal__container">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    open () {
      const body = document.querySelector('body')
      const padding = (window.innerWidth - body.clientWidth) + 'px'

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

<style lang="scss">
.v-modal {
  position: fixed;
  display: flex;
  background-color: rgba(#000, 0.6);
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.v-modal__container {
  padding: 10px 0;
  margin: auto;
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
