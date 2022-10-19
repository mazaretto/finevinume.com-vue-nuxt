<template>
  <div class="v-select-checkbox-option">
    <label class="label-input-button">
      <v-input-button
        :value="value"
        :checked="checked"
        @change="$emit('change', $event, value)"
      />
      <span class="label-input-button__text">{{ value }}</span>
    </label>
    <span class="v-select-checkbox-option__count" v-if="count">{{ count }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: false
    },
    checked: {
      type: Array
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>

<style lang="scss">
.v-select-checkbox-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 18px;
}

.v-select-checkbox-option__count {
  color: $gray3;
  margin-left: 10px;
}
</style>
