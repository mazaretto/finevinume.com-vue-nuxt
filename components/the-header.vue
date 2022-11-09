<template>
  <header class="the-header">
    <div class="container">
      <div class="the-header__top">
        <svg-burger-menu class="the-header__burger-menu" @click="CHANGE_MOBILE_MODAL('header')" />
        <nuxt-link class="the-header__home-link" to="/">
          <svg-logo class="the-header__logo" />
        </nuxt-link>
        <the-header-search />
        <the-header-profile />
        <v-avatar class="the-header__top-avatar" small @click.native="CHANGE_MOBILE_MODAL('auth')" />
      </div>
      <nav class="the-header__nav">
        <ul class="the-header__nav-ul">
          <li
            v-for="(link, id) in links"
            :key="id"
            class="the-header__nav-item"
            v-bind:class="{'the-header__nav-item--active' : link.route.split('/').join('') === $nuxt.$route.name}"
          >
            <nuxt-link class="the-header__nav-link" :to="link.route">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <the-mobile-modal :active="mobileModal === 'header'">
      <div class="the-mobile-modal__search">
        <svg-binoculars class="the-mobile-modal__search-binoculars" />
        <input class="the-mobile-modal__search-input" placeholder="Search" type="search">
      </div>
      <div class="the-header__mobile-nav">
        <ul class="the-header__mobile-nav-ul">
          <li v-for="(link, id) in links" :key="id" class="the-header__mobile-nav-item">
            <nuxt-link class="the-header__mobile-nav-link" :to="link.route">
              {{ link.name }}
            </nuxt-link>
            <svg-mobile-link-arrow class="the-header__mobile-nav-item-arrow" />
          </li>
        </ul>
        <ul class="the-header__mobile-nav-ul">
          <li class="the-header__mobile-nav-item">
            <span class="the-header__mobile-nav-link" @click="CHANGE_MOBILE_MODAL('auth')">Register / Login</span>
            <svg-mobile-link-arrow class="the-header__mobile-nav-item-arrow" />
          </li>
          <li class="the-header__mobile-nav-item">
            <span class="the-header__mobile-nav-link">Find Wine</span>
            <svg-mobile-link-arrow class="the-header__mobile-nav-item-arrow" />
          </li>
          <li class="the-header__mobile-nav-item">
            <nuxt-link :to="{ name: 'contacts' }">Contact us</nuxt-link>
            <svg-mobile-link-arrow class="the-header__mobile-nav-item-arrow" />
          </li>
        </ul>
      </div>
      <v-button
        class="the-header__mobile-button v-button--uppercase v-button--round"
        @click.native="CHANGE_MOBILE_MODAL('header')"
      >
        Close
      </v-button>
    </the-mobile-modal>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import SvgBurgerMenu from '~/assets/icons/burger-menu.svg?inline'
import SvgLogo from '~/assets/icons/logo.svg?inline'
import SvgBinoculars from '~/assets/icons/binoculars.svg?inline'
import SvgMobileLinkArrow from '~/assets/icons/mobile-link-arrow.svg?inline'

export default {
  data () {
    return {
      mobileMenu: false,
      links: [
        {
          name: 'Categories',
          route: '/categories'
        },
        {
          name: 'Send a Bottle',
          route: '/send-bottle'
        },
        {
          name: 'Contacts',
          route: '/contacts'
        },
        {
          name: 'Producers',
          route: '/producers'
        },
        {
          name: 'Stores',
          route: '/stores'
        },
        {
          name: 'About us',
          route: '/about-us'
        }
      ]
    }
  },
  methods: {
    toggleMenu () {
      if (this.authModal) {
        this.CLOSE_MODAL()
      } else {
        this.OPEN_MODAL('register')
      }
    },
    ...mapMutations({
      OPEN_MODAL: 'auth-modal/OPEN_MODAL',
      CLOSE_MODAL: 'auth-modal/CLOSE_MODAL',
      CHANGE_MOBILE_MODAL: 'mobile-auth-modal/CHANGE_MOBILE_MODAL'
    })
  },
  computed: {
    ...mapGetters({
      authModal: 'auth-modal/authModal',
      mobileModal: 'mobile-modal/modal'
    })
  },
  components: {
    SvgLogo,
    SvgBurgerMenu,
    SvgBinoculars,
    SvgMobileLinkArrow
  }
}
</script>

<style lang="scss">
.the-header {
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(#1b1b1b, 0.1);
  padding: 20px 0;

  @media screen and (max-width: 1024px) {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    padding-bottom: 20px;
    z-index: 999;
  }
}

.the-header__top {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-gap: 15px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 40px 1fr 40px;
  }
}

.the-header__burger-menu {
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 21px;
    height: 20px;
  }
}

.the-header__home-link {
  line-height: 0;
  fill: $primary-color;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
}

.the-header__logo {
  width: 137px;
  height: 45px;
}

.the-header__top-avatar {
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
}

.the-header__nav {
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.the-header__nav-ul {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  width: fit-content;
  line-height: 22px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 0;
  }
}

.the-header__nav-item {
  position: relative;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 6px;
      background-color: $primary-color;
      top: calc(100% + 14px);
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 0 15px 15px;

    &:hover {
      &::after {
        display: none;
      }
    }
  }
}

.the-header__nav-item--active {
  &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 6px;
      background-color: $primary-color;
      top: calc(100% + 14px);
    }
}

.the-header__mobile-nav {
  display: grid;
  grid-gap: 55px;
  font-size: 18px;
  line-height: 38px;
  color: $gray5;
  margin-top: 30px;
}

.the-header__mobile-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.the-header__mobile-nav-item-arrow {
  width: 7px;
  height: 12px;
  fill: $gray2;
}

.the-header__mobile-button {
  height: 50px;
  background-color: transparent;
  border: 1px solid $gray3;
  color: $gray3;
  margin-top: auto;
}
</style>
