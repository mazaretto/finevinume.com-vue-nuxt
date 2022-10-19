<template>
  <div class="v-breadcrumbs">
    <nuxt-link
      v-for="path of paths"
      class="v-breadcrumbs__path"
      :key="path"
      :to="{ name: path === '' ? 'index' : path }"
      :class="{'v-breadcrumbs__path--current': path === $router.currentRoute.name}"
    >
      {{ path === $router.currentRoute.name ? path : `${path === '' ? 'home': path} |` }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    paths () {
      const fullPath = this.$router.currentRoute.fullPath
      return fullPath.split('/')
    }
  }
}
</script>

<style lang="scss">
.v-breadcrumbs {
  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-breadcrumbs__path {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
  color: $gray4;
  text-transform: capitalize;

  &:hover {
    color: $gray2;
  }
}

.v-breadcrumbs__path--current {
  color: $gray2;
}
</style>
