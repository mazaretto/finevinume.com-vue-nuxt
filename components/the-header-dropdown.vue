<template>
  <div class="the-header-dropdown">
    <div class="the-header-dropdown__body">
      <span class="the-header-dropdown__username">{{ $auth.user.name }}</span>
      <div class="the-header-dropdown__info">
        <v-avatar small />
        <ul class="the-header-dropdown__info-list">
          <li class="the-header-dropdown__info-item">
            <span>Wines</span>
            <span class="the-header-dropdown__info-item-value">0</span>
          </li>
          <li class="the-header-dropdown__info-item">
            <span>Points</span>
            <span class="the-header-dropdown__info-item-value">0</span>
          </li>
        </ul>
      </div>
      <div class="the-header-dropdown__links">
        <span class="the-header-dropdown__links-title">Wines:</span>
        <ul class="the-header-dropdown__links-list">
          <li class="the-header-dropdown__links-item" v-for="(route, id) in routes" :key="id">
            <svg-dropdown-link-arrow class="the-header-dropdown__link-arrow" />
            <nuxt-link class="the-header-dropdown__link" :to="{ path: `/profile/${route.toLowerCase()}` }">
              {{ route }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="the-header-dropdown__buttons">
        <v-button class="the-header-dropdown__button v-button--default-secondary v-button--uppercase">
          Edit profile
        </v-button>
        <span class="link the-header-dropdown__logout" @click="$auth.logout()">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import SvgDropdownLinkArrow from '~/assets/icons/dropdown-link-arrow.svg?inline'

export default {
  data () {
    return {
      routes: [
        'Collection',
        'Notes',
        'Rates',
        'Shoplinks',
        'Wishlist'
      ]
    }
  },
  components: {
    SvgDropdownLinkArrow
  }
}
</script>

<style lang="scss">
.the-header-dropdown {
  position: absolute;
  width: 180px;
  font-family: $Montserrat;
  z-index: 99;
  padding-top: 20px;
  top: 100%;
}

.the-header-dropdown__body {
  background-color: #fff;
  border: 1px solid $gray6;
  padding: 20px;
}

.the-header-dropdown__username {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $gray1;
}

.the-header-dropdown__info {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.the-header-dropdown__info-list {
  display: grid;
  grid-gap: 5px;
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
}

.the-header-dropdown__info-item-value {
  font-weight: 500;
  color: $gray1;
  margin-left: 10px;
}

.the-header-dropdown__links {
  margin-top: 15px;
}

.the-header-dropdown__links-title {
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: $gray1;
}

.the-header-dropdown__links-list {
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;
}

.the-header-dropdown__link-arrow {
  width: 7px;
  height: 12px;
}

.the-header-dropdown__links-item {
  display: flex;
  align-items: center;
  fill: $gray5;
}

.the-header-dropdown__link {
  cursor: pointer;
  margin-left: 7px;

  &:hover {
    text-decoration: underline;
  }
}

.the-header-dropdown__buttons {
  display: grid;
  grid-gap: 10px;
  font-family: $Open-Sans;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-top: 25px;
}

.the-header-dropdown__button {
  height: 30px;

  & .v-button__inner {
    padding: 0;
  }
}

.the-header-dropdown__logout {
  color: $gray4;
  margin: 0 auto;

  &:hover {
    color: $primary-color;
  }
}
</style>
