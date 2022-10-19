<template>
  <div class="v-input" :class="{'v-input--invalid': invalid}">
    <input
      class="v-input__input"
      :type="resultType"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <svg-password-hidden
      v-if="type === 'password' && !visible"
      class="v-input__icon"
      @click="visible = true"
    />

    <svg-password-visible
      v-if="type === 'password' && visible"
      class="v-input__icon"
      @click="visible = false"
    />

    <span class="v-input__error" v-if="message && invalid">{{ message }}</span>
  </div>
</template>

<script>
import SvgPasswordHidden from '~/assets/icons/password-hidden.svg?inline'
import SvgPasswordVisible from '~/assets/icons/password-visible.svg?inline'

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    name: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false
    },
    message: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    resultType () {
      if (this.type === 'password') {
        return this.visible ? 'text' : 'password'
      } else {
        return this.type
      }
    }
  },
  components: {
    SvgPasswordHidden,
    SvgPasswordVisible
  }
}
</script>

<style lang="scss">
.v-input {
  display: flex;
  position: relative;
}

.v-input--invalid {
  border-color: $red !important;
  color: $red;
}

.v-input__input {
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: inherit;
  border: none;
  text-align: inherit;
  //
  // &::placeholder {
  //   color: $gray4;
  // }
}

.v-input__icon {
  position: absolute;
  align-self: center;
  width: 20px;
  height: 16px;
  cursor: pointer;
  fill: $gray3;
  right: 20px;
}

.v-input__error {
  position: absolute;
  font-size: 10px;
  line-height: 14px;
  font-weight: 600;
  white-space: pre;
  color: $red;
  top: 100%;
  left: 0;
}
</style>
