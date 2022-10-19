<template>
  <div class="v-input-button" :class="{'v-input-button--radio': radio, 'v-input-button--invalid': invalid}">
    <input
      class="v-input-button__input"
      :type="type"
      :name="name"
      :value="value"
      v-model="model"
    >
    <span class="v-input-button__thumb"></span>
  </div>
</template>

<script>
export default {
  props: {
    radio: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    checked: {
      type: [Boolean, String, Array]
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  computed: {
    type () {
      return this.radio ? 'radio' : 'checkbox'
    },
    model: {
      get () {
        return this.checked
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="scss">
.v-input-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $gray3;
  width: 24px;
  height: 24px;
  line-height: 0;
}

.v-input-button--radio {
  border-radius: 50%;
}

.v-input-button--invalid {
  border-color: $red !important;
}

.v-input-button__input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;

  &:checked + .v-input-button__thumb {
    display: block;
  }
}

.v-input-button__input--invalid {

}

.v-input-button__thumb {
  display: none;
  width: 14px;
  height: 14px;
  background-color: $primary-color;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: inherit;
}

.v-input-button--radio-checked {
  border-color: $primary-color;
}
</style>
