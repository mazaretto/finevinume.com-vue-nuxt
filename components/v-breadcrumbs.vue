<template>
  <div
    class="v-breadcrumbs"
    :class="{ 'v-breadcrumbs--grid': count !== undefined }"
  >
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
        <span v-if="currentRouteName && Number(path)">
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
      <span
        v-if="countries.length > 0"
        style="white-space: nowrap;"
      >Showing: {{ count }} Wines, {{ countries.join(', ') }}</span>
      <span
        v-else
        style="white-space: nowrap;"
      >Showing: {{ count }} Wines</span>
      <div class="search__wrapper">
        <input
          v-model.trim="search"
          class="input input-search"
          type="search"
          :placeholder="'Search'"
          @input="sendSearch"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      countries: 'categories-filters/countries'
    }),
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
  align-items: center;
  display: flex;
  width: 100%;
  grid-template-columns: 0.25fr 1fr;
  @media screen and (max-width: 600px) {
    display: none;
  }
}
.v-breadcrumbs--grid {
  display: grid;
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
  justify-content: space-between;
  justify-self: flex-start;
  width: 100%;
}
.input-search {
  max-width: 80px;
  margin-left: 6px;
  padding-right: 0;
  font-size: 18px;
  border: none;
  height: 30px;
}
.search__wrapper {
  position: relative;
  border-bottom: 1px solid #f2f2f2;
}
.search__wrapper::before {
  content: '';
  display: block;
  bottom: 7px;
  width: 16px;
  height: 16px;
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.9023 14.9597L11.2545 10.3118C12.136 9.22342 12.6667 7.8398 12.6667 6.33336C12.6667 2.84116 9.82552 0 6.33333 0C2.84113 0 0 2.84116 0 6.33336C0 9.82555 2.84116 12.6667 6.33336 12.6667C7.8398 12.6667 9.22342 12.136 10.3118 11.2545L14.9597 15.9024C15.0899 16.0325 15.3009 16.0325 15.4311 15.9024L15.9024 15.4311C16.0325 15.3009 16.0325 15.0898 15.9023 14.9597ZM6.33336 11.3334C3.5762 11.3334 1.33335 9.09052 1.33335 6.33336C1.33335 3.5762 3.5762 1.33335 6.33336 1.33335C9.09052 1.33335 11.3334 3.5762 11.3334 6.33336C11.3334 9.09052 9.09052 11.3334 6.33336 11.3334Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A");
}
.v-breadcrumbs-select-search {
  margin-bottom: 0 !important;
}
</style>
