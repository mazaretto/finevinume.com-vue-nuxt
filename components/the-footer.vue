<template>
  <footer class="the-footer">
    <div class="container">
      <div class="the-footer__main">
        <div class="the-footer__links">
          <nav class="the-footer__nav">
            <div class="the-footer__main-section">
              <span
                class="the-footer__section-title the-footer__section-title--underlined"
              >Site navigation</span>
              <div class="the-footer__section-links">
                <ul class="the-footer__nav-ul">
                  <li
                    v-for="(link, id) of links"
                    :key="id"
                    class="the-footer__nav-item"
                  >
                    <nuxt-link class="the-footer__link" :to="link.route">
                      {{ link.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="the-footer__main-section">
              <span
                class="the-footer__section-title the-footer__section-title--underlined"
              >Personal Area</span>
              <div class="the-footer__section-links">
                <ul class="the-footer__nav-ul">
                  <li v-if="!this.$auth.user" class="the-footer__nav-item">
                    <span class="the-footer__auth">
                      <span
                        class="the-footer__register"
                        @click="OPEN_MODAL('register')"
                      >Register</span>
                      /
                      <span
                        class="the-footer__login"
                        @click="OPEN_MODAL('login')"
                      >Login</span>
                    </span>
                  </li>
                  <li class="the-footer__nav-item">
                    <a class="the-footer__link" href="#">Find the wine</a>
                  </li>
                  <li class="the-footer__nav-item">
                    <nuxt-link class="the-footer__link" to="/policy">
                      Privacy Policy
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="the-footer__main-section the-footer__contacts">
            <span
              class="the-footer__section-title the-footer__section-title--underlined"
            >Contact us</span>
            <div class="the-footer__section-links">
              <ul class="the-footer__nav-ul the-footer__contacts-ul">
                <li class="the-footer__nav-item">
                  <a
                    class="the-footer__link"
                    href="mailto:Winecollection@gmail.com"
                  >Winecollection@gmail.com</a>
                  <svg-link-mail class="the-footer__nav-item-icon" />
                </li>
                <li class="the-footer__nav-item">
                  <a
                    class="the-footer__link"
                    href="tel:+380442202020"
                  >+38 (044) 220 20 20</a>
                  <svg-link-phone class="the-footer__nav-item-icon" />
                </li>
                <li class="the-footer__nav-item">
                  <a
                    class="the-footer__link"
                    href="tel:+380442202019"
                  >+38 (044) 220 20 19</a>
                  <svg-link-phone class="the-footer__nav-item-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="!$auth.loggedIn" class="the-footer__newsletter">
          <span class="the-footer__section-title">Newsletter</span>
          <div class="the-footer__newsletter-main">
            <p class="the-footer__newsletter-description">
              Whiskey Auctioneer will only use this information to send you our
              e-newsletter. You can unsubscribe at any time.
            </p>
            <form class="the-footer__newsletter-form">
              <input
                class="input the-footer__newsletter-input"
                type="email"
                placeholder="Email"
              >
              <v-button
                default
                class="the-footer__newsletter-button v-button--uppercase"
                @click.native="sendForm()"
              >
                Subscribe
              </v-button>
            </form>
          </div>
        </div>
        <div v-else class="the-footer__account">
          <span
            class="the-footer__section-title the-footer__section-title--underlined"
          >My account</span>
          <div class="the-footer__section-links">
            <ul class="the-footer__nav-ul the-footer__account-ul">
              <li
                v-for="(route, id) of routes"
                :key="id"
                class="the-footer__nav-item"
              >
                <nuxt-link
                  class="the-footer__link"
                  :to="{ path: `/profile/${route.toLowerCase()}` }"
                >
                  {{ route }}
                </nuxt-link>
              </li>
              <li
                class="the-footer__nav-item the-footer__nav-item--account-laptop"
              >
                <span class="the-footer__link">+Add a shoplink</span>
              </li>
              <li
                class="the-footer__nav-item the-footer__nav-item--account-laptop"
              >
                <span class="the-footer__link">+Add a bottle</span>
              </li>
            </ul>
            <v-button
              default
              class="the-footer__logout-button the-footer__logout-button-laptop v-button--uppercase"
            >
              Logout
            </v-button>
          </div>
        </div>
      </div>
      <div
        class="the-footer__bottom"
        :class="{ 'the-footer__bottom--logged-in': $auth.loggedIn }"
      >
        <div class="the-footer__row">
          <span>Coperight©2022</span>
          <a class="link" @click="SET_COOKIE(true)">Cookie Polity</a>
        </div>
        <div v-if="$auth.loggedIn" class="the-footer__bottom-account">
          <div class="the-footer__row">
            <span class="link">+Add a shoplink</span>
            <span class="link">+Add a bottle</span>
          </div>
          <v-button
            default
            class="the-footer__logout-button v-button--uppercase"
          >
            Logout
          </v-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

import SvgLinkMail from '~/assets/icons/link-mail.svg?inline'
import SvgLinkPhone from '~/assets/icons/link-phone.svg?inline'

export default {
  components: {
    SvgLinkMail,
    SvgLinkPhone
  },
  methods: {
    ...mapMutations({
      SET_COOKIE: 'cookie/SET_COOKIE'
    })
  },
  data () {
    return {
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
        },
        {
          name: 'News',
          route: '/news'
        }
      ],
      methods: {
        sendForm () {
          return true
        }
      },
      routes: ['Collection', 'Notes', 'Rates', 'Shoplinks', 'Wishlist']
    }
  }
}
</script>

<style lang="scss">
.the-footer {
  background-color: #1b1b1b;
  font-weight: 600;
  color: $gray3;
  padding: 50px 0;
}

.the-footer__main {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, auto) minmax(0, 380px);
  grid-gap: 40px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
}

.the-footer__links {
  display: contents;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-auto-flow: column;
    justify-content: flex-start;
    grid-gap: 80px;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    grid-gap: 0;
  }

  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
    grid-template-columns: auto auto;
    justify-content: flex-start;
    grid-gap: 25px 40px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: auto;
  }
}

.the-footer__contacts {
  @media screen and (max-width: 600px) {
    grid-column: span 2;
  }

  @media screen and (max-width: 400px) {
    grid-column: auto;
  }
}

.the-footer__nav {
  display: contents;
}

.the-footer__section-title {
  display: inline-block;
  font-size: 18px;
  color: #fff;
}

.the-footer__section-title--underlined {
  border-bottom: 1px solid $gray2;
  padding-bottom: 15px;
}

.the-footer__section-links {
  display: flex;
  margin-top: 15px;
}

.the-footer__nav-ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  grid-gap: 15px 40px;
  line-height: 24px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
}

.the-footer__main-section:first-child .the-footer__nav-ul {
  grid-template-rows: repeat(4, auto);
  margin-bottom: 40px;
}

.the-footer__nav-item {
  display: flex;
  align-items: center;
}

.the-footer__link {
  order: 1;

  &:hover {
    color: #fff;
  }

  &:hover ~ .the-footer__nav-item-icon {
    fill: #fff;
  }
}

.the-footer__register,
.the-footer__login {
  cursor: pointer;
  @extend .the-footer__link;
}

.the-footer__nav-item-icon {
  width: 21px;
  height: 21px;
  fill: $gray3;
  margin-right: 10px;
}

.the-footer__contacts-ul {
  font-size: 14px;
  letter-spacing: 0;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: auto;
  }
}

.the-footer__newsletter {
  @media screen and (max-width: 1024px) {
    max-width: none;
    margin-top: 30px;
  }
}

.the-footer__newsletter-main {
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    display: grid;
    align-items: center;
    grid-template-columns: 380px auto;
    grid-gap: 10px;
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: auto;
    grid-gap: 25px;
    margin-top: 5px;
  }

  @media screen and (max-width: 400px) {
    margin-top: 15px;
  }
}

.the-footer__newsletter-description {
  font-family: $Montserrat;
  font-size: 12px;
  line-height: 150%;
}

.the-footer__newsletter-form {
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 130px;
    margin-top: 0;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: auto;
    grid-gap: 10px;
  }
}

.the-footer__newsletter-button {
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
}

.the-footer__newsletter-input {
  background-color: transparent;
  border-color: $gray3;
  font-size: 14px;
  line-height: 24px;
  color: #fff;

  &:focus {
    border-color: #fff;
  }

  @media screen and (max-width: 1024px) {
    border-right: none !important;
  }

  @media screen and (max-width: 400px) {
    border-right: 1px solid #e0e0e0 !important;
  }
}

.the-footer__account-ul {
  grid-column-gap: 50px;
  font-size: 14px;
  letter-spacing: 0;

  @media screen and (max-width: 1024px) {
    grid-gap: 0 40px;
    grid-template-rows: repeat(2, auto);
    font-size: 16px;
    line-height: 38px;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    grid-gap: 0;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 360px) {
    justify-content: flex-start;
    grid-gap: 0 20px;
    grid-template-rows: repeat(4, auto);
  }
}

.the-footer__nav-item--account-laptop {
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
}

.the-footer__bottom {
  display: flex;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
}

.the-footer__bottom--logged-in {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.the-footer__row {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
}

.the-footer__account {
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }
}

.the-footer__bottom-account {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 600px) {
    display: block;

    .the-footer__row {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    order: -1;
    margin-bottom: 20px;
  }
}

.the-footer__logout-button {
  width: 140px;
  height: 30px !important;
  font-weight: 400 !important;
  margin-left: 45px;

  @media screen and (max-width: 600px) {
    height: 45px !important;
    margin-left: auto;
  }
}

.the-footer__logout-button-laptop {
  display: none;

  @media screen and (max-width: 1024px) and (min-width: 601px) {
    display: block;
    height: 40px !important;
    align-self: flex-end;
    margin-left: 55px;
  }
}
</style>
