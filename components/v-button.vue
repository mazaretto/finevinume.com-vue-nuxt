<template>
  <button class="v-button" :class="classObject" :type="type">
    <div class="v-button__inner">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    default: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultSecondary: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classObject () {
      return {
        'v-button--default': this.default,
        'v-button--default-secondary': this.defaultSecondary
      }
    }
  }
}
</script>

<style lang="scss">
.v-button {
  cursor: pointer;
}

.v-button--default {
  @include button;
}

.v-button--default-secondary {
  @include button($transparent: true);
}

.v-button--uppercase {
  text-transform: uppercase;
}

.v-button--round {
  border-radius: 30px;
}

// .v-button--height-45 {
//   height: 45px;
// }

.v-button__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
