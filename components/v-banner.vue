<template>
  <div class="v-banner">
    <img class="v-banner__img" :src="src" alt="banner">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-banner {
  width: 100%;
  height: 280px;

  @media screen and (max-width: 1024px) {
    height: 150px;
  }
}

.v-banner__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
