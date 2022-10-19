<template>
  <transition name="mobile-modal">
    <div class="the-mobile-modal" v-if="active">
      <div class="the-mobile-modal__lightbox container">
        <div class="the-mobile-modal__lightbox-inner">
          <slot></slot>
        </div>
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
  }
}
</script>

<style lang="scss">
.the-mobile-modal {
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: fixed;
    background-color: rgba(#000, 0.7);
    top: 85px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  input {
    color: $gray5;

    &::placeholder {
      color: $gray3;
    }
  }
}

.the-mobile-modal__inner {
  height: 100%;
  width: 100%;
  overflow: scroll;
}

.the-mobile-modal__lightbox {
  display: flex;
  flex-direction: column;
  height: calc(100% - 30px);
  background-color: #1B1B1B;
  overflow-y: scroll;
  @include noScrollbar;
}

.the-mobile-modal__lightbox-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
}

.the-mobile-modal__title {
  font-size: 24px;
  line-height: 32px;
  color: $gray5;
  margin-bottom: 35px;
}

.the-mobile-modal__title--center {
  text-align: center;
}

.the-mobile-modal__search {
  display: flex;
  border-bottom: 1px solid $gray2;
  padding-bottom: 10px;
}

.the-mobile-modal__search-binoculars {
  width: 24px;
  height: 20px;
  fill: $gray2;
}

.the-mobile-modal__search-input {
  flex: 1;
  border: none;
  font-size: 12px;
  padding: 0 10px;

  &::placeholder {
    color: $gray2;
  }
}

.the-mobile-modal__link {
  font-size: 12px;
  line-height: 26px;
  text-transform: uppercase;
  color: $gray5;
}

.mobile-modal-enter-active,
.mobile-modal-leave-active {
  transition-property: opacity;
  transition-duration: 0.2s;
}

.mobile-modal-enter,
.mobile-modal-leave-to {
  opacity: 0;
}
</style>
