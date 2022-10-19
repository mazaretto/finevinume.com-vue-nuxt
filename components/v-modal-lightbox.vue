<template>
  <div class="v-modal-lightbox" :class="{'v-modal-lightbox--notification': notification}">
    <slot></slot>
    <div class="v-modal-lightbox__main" :class="{'v-modal-lightbox__main--fetching': fetching}">
      <div class="v-modal-lightbox__main-top">
        <span class="v-modal-lightbox__title" :class="{'title--medium': !titleLarge}">{{ title }}</span>
        <svg-cross class="v-modal-lightbox__cross" @click="$emit('close')" />
      </div>
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
import SvgCross from '~/assets/icons/cross.svg?inline'

export default {
  props: {
    fetching: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    titleLarge: {
      type: Boolean,
      required: false,
      default: false
    },
    notification: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    SvgCross
  }
}
</script>

<style lang="scss">
.v-modal-lightbox {
  position: relative;
  display: flex;
  justify-content: center;
  transition: transform 0.4s;
}

.v-modal-lightbox--notification {
  & .v-modal-lightbox__main {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: {
      left: 30px;
      right: 30px;
    }
  }

  & .v-modal-lightbox__main-top {
    justify-content: center;
  }

  & .v-modal-lightbox__cross {
    position: absolute;
    top: 23.75px;
    right: 20.5px;
  }
}

.v-modal-lightbox__main {
  position: relative;
  width: 100%;
  max-width: 580px;
  background-color: #fff;
  padding: 20px 30px;
}

.v-modal-lightbox__main--fetching {
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#fff, 0.5);
  }
}

.v-modal-lightbox__main-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-modal-lightbox__title {
  font-size: 24px;
  line-height: 200%;
  color: $gray1;
  text-transform: uppercase;
}

.v-modal-lightbox__main-inner {
  border-top: 1px solid $gray6;
  padding-top: 20px;
  margin-top: 15px;
}

.v-modal-lightbox__cross {
  width: 18px;
  height: 17px;
  fill: $gray6;
  cursor: pointer;

  &:hover {
    fill: $gray4;
  }
}

.v-modal-lightbox__form {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.4s;
}

.v-modal-lightbox__form-grid {
  display: grid;
  grid-gap: 30px;
}

.v-modal-lightbox__notification-text {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  margin-top: 20px;
}

.v-modal-lightbox__success-arrow {
  width: 44px;
  height: 34px;
  fill: $green;
  margin: 20px auto 0;
}

.v-modal-lightbox__notification-button {
  width: 280px;
  margin-top: 20px;
}
</style>
