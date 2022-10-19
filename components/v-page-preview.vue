<template>
  <div class="v-page-preview float-box">
    <span class="title" :class="{'title--center': titleCenter}">
      {{ title }}
    </span>
    <div class="v-page-preview__main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleCenter: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-page-preview {
  background-color: #fff;
}

.v-page-preview__main {
  margin-top: 15px;
}

.v-page-preview__paragraph {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
}
</style>
