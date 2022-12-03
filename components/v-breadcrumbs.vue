<template>
  <div class="v-breadcrumbs">
    <nav>
      <nuxt-link
        v-for="path of paths"
        :key="path"
        class="v-breadcrumbs__path"
        :to="{ name: path === '' ? 'index' : path }"
        :class="{
          'v-breadcrumbs__path--current': path === $router.currentRoute.name
        }"
      >
        <span v-if="(currentRouteName && Number(path))">
          {{ currentRouteName }}
        </span>
        <span v-else>
          {{
            path === $router.currentRoute.name
              ? path
              : `${path === '' ? 'home' : path} |`
          }}
        </span>
      </nuxt-link>
    </nav>
    <div v-if="count !== undefined" class="v-breadcrumbs-search">
      <span style="white-space: nowrap;">Showing: {{ count }} Wines</span>
      <input
        v-model.trim="search"
        class="input input-search"
        type="search"
        :placeholder="'Search wines...'"
        @input="sendSearch"
      >
    </div>
  </div>
</template>

<script>
import SvgMagnifier from '~/assets/icons/magnifier.svg?inline'

export default {
  props: {
    currentRouteName: {
      required: false
    },
    count: {
      required: false
    }
  },
  data () {
    return {
      search: null
    }
  },
  computed: {
    paths () {
      const fullPath = this.$router.currentRoute.fullPath
      return fullPath.split('/')
    }
  },
  methods: {
    sendSearch () {
      this.$emit('callbackSearch', this.search)
    }
  }
}
</script>

<style lang="scss">
.v-breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.v-breadcrumbs-search {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.v-breadcrumbs-select-search {
  margin-bottom: 0 !important;
}
</style>
