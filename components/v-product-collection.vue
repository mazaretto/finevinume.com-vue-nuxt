<template>
  <div class="v-product-collection" @click="toggleWishcolls">
    <svg class="v-product-collection__icon" :class="{'v-product-collection__icon--not-logged': !$auth.loggedIn}" viewBox="0 0 16 24">
      <path d="M9.59811 14.9144C9.67719 14.873 9.74506 14.8189 9.80216 14.7568C12.8611 13.9144 15.125 10.9804 15.125 7.5C15.125 5.15527 13.6494 0.701297 13.5865 0.512812C13.4844 0.206578 13.1978 0 12.875 0H3.125C2.80217 0 2.51558 0.206578 2.41348 0.512812C2.35062 0.701297 0.875 5.15527 0.875 7.5C0.875 10.9804 3.13888 13.9144 6.19784 14.7567C6.25494 14.8189 6.32281 14.873 6.40189 14.9144C6.92502 15.1884 7.25 15.7255 7.25 16.3162V21C7.25 21.8271 6.57711 22.5 5.75 22.5H4.25C3.83577 22.5 3.5 22.8358 3.5 23.25C3.5 23.6642 3.83577 24 4.25 24H11.75C12.1642 24 12.5 23.6642 12.5 23.25C12.5 22.8358 12.1642 22.5 11.75 22.5H10.25C9.42289 22.5 8.75 21.8271 8.75 21V16.3162C8.75 15.7255 9.07498 15.1884 9.59811 14.9144ZM2.375 7.5C2.375 5.82797 3.2907 2.72227 3.67255 1.5H12.3276C12.7094 2.72194 13.625 5.82638 13.625 7.5C13.625 10.8084 11.1016 13.5 8 13.5C4.89838 13.5 2.375 10.8084 2.375 7.5Z"/>
      <path v-show="active && $auth.loggedIn" d="M9.80216 14.7568C9.74506 14.8189 9.67719 14.873 9.59811 14.9144C9.07498 15.1884 8.75 15.7255 8.75 16.3162V21C8.75 21.8271 9.42289 22.5 10.25 22.5H11.75C12.1642 22.5 12.5 22.8358 12.5 23.25C12.5 23.6642 12.1642 24 11.75 24H4.25C3.83577 24 3.5 23.6642 3.5 23.25C3.5 22.8358 3.83577 22.5 4.25 22.5H5.75C6.57711 22.5 7.25 21.8271 7.25 21V16.3162C7.25 15.7255 6.92502 15.1884 6.40189 14.9144C6.32281 14.873 6.25494 14.8189 6.19784 14.7567C3.13888 13.9144 0.875 10.9804 0.875 7.5C0.875 5.15527 2.35062 0.701297 2.41348 0.512812C2.51558 0.206578 2.80217 0 3.125 0H12.875C13.1978 0 13.4844 0.206578 13.5865 0.512812C13.6494 0.701297 15.125 5.15527 15.125 7.5C15.125 10.9804 12.8611 13.9144 9.80216 14.7568Z"/>
    </svg>
    <span v-if="text" class="v-product-collection__text">{{ text }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    toggleWishcolls () {
      if (this.$auth.loggedIn) {
        return this.$emit('togglewishcolls', 0)
      }
      return this.OPEN_MODAL('login')
    },
    ...mapMutations({
      OPEN_MODAL: 'auth-modal/OPEN_MODAL'
    })
  }
}
</script>

<style lang="scss">
.v-product-collection {
  display: flex;
  align-items: center;
  line-height: 0;
  fill: $blue;
  cursor: pointer;
}

.v-product-collection__icon {
  width: 16px;
  height: 24px;
}

.v-product-collection__icon--not-logged {
  fill: $gray5;
  color: $gray5;
  cursor: inherit;
}

.v-product-collection__text {
  font-size: 18px;
  line-height: 20px;
  color: $blue;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
}
</style>
