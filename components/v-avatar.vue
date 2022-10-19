<template>
  <div class="v-avatar" :class="{'v-avatar--small': small}">
    <img v-if="!src" class="v-avatar__placeholder" src="~/assets/icons/avatar-placeholder.svg" alt="placeholder">
    <img v-else class="v-avatar__img" :src="src">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false
    },
    small: {
      type: Boolean,
      reqired: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-avatar {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
}

.v-avatar__placeholder {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.v-avatar--small {
  width: 40px;
  height: 40px;
}

.v-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
