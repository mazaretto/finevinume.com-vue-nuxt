<template>
  <div class="v-textarea" :class="{'v-textarea--error': invalid}">
    <textarea
      class="v-textarea__textarea"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)">
    </textarea>
    <div class="v-textarea__error" v-if="message && invalid">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      reuqired: false
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
  }
}
</script>

<style lang="scss">
.v-textarea {
  display: flex;
  position: relative;
}

.v-textarea--error {
  border-color: $red !important;
  color: $red;
}

.v-textarea__textarea {
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: inherit;
  border: none;
  text-align: inherit;
}

.v-textarea__error {
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
