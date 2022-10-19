<template>
  <div class="the-modal-auth">
    <v-modal class="the-modal-auth__desktop-modal" :active="authModal">
      <v-modal-lightbox
        class="the-modal-auth__main-lightbox"
        :title="activeContext.title"
        :fetching="fetching"
        title-large
        @close="CLOSE_MODAL()"
      >
        <div class="the-modal-auth__lightbox-image-wrap">
          <img class="the-modal-auth__lightbox-image" src="~/assets/images/auth-modal.png" alt="auth">
        </div>

        <template #main>
          <span class="the-modal-auth__description">{{ activeContext.description }}</span>
          <transition name="context-fade" mode="out-in">
            <component
              :is="`the-modal-auth-${authModalContext}`"
              @change-context="activeContext = $event"
              @fetch="fetching = !fetching">
            </component>
          </transition>
        </template>
      </v-modal-lightbox>
    </v-modal>

    <v-modal :active="successModal">
      <v-modal-lightbox
        title="Thank you for registering"
        notification
        @close="CLOSE_MODAL()"
      >
        <template #main>
          <p class="v-modal-lightbox__notification-text">Now you can save the best positions in your personal account. Appreciate and discover the right wine!</p>
          <svg-success-arrow class="v-modal-lightbox__success-arrow" />
          <v-button
            class="v-modal-lightbox__notification-button v-button--uppercase"
            default-secondary
            @click.native="CLOSE_MODAL()"
          >
            close
          </v-button>
        </template>
      </v-modal-lightbox>
    </v-modal>

    <the-mobile-modal class="the-modal-auth__mobile-modal" :active="mobileModal === 'auth'">
      <div class="the-modal-auth__mobile-modal-head">
        <span class="the-mobile-modal__title">{{ activeContext.title }}</span>
        <p class="the-modal-auth__mobile-modal-description">{{ activeContext.description }}</p>
      </div>
      <component
        :is="`the-modal-auth-${authModalContext}`"
        @change-context="activeContext = $event"
        @fetch="fetching = !fetching">
      </component>
    </the-mobile-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import SvgSuccessArrow from '~/assets/icons/success-arrow.svg?inline'

export default {
  data () {
    return {
      fetching: false,
      activeContext: {
        title: 'Join Wine Collection',
        description: 'Create a profile to save, rate and discover the right wine for you!'
      }
    }
  },
  computed: {
    ...mapGetters({
      authModal: 'auth-modal/authModal',
      authModalContext: 'auth-modal/authModalContext',
      successModal: 'auth-modal/successModal',
      mobileModal: 'mobile-modal/modal'
    })
  },
  methods: {
    ...mapMutations({
      CLOSE_MODAL: 'auth-modal/CLOSE_MODAL',
      CHANGE_MOBILE_MODAL: 'mobile-modal/CHANGE_MOBILE_MODAL'
    })
  },
  components: {
    SvgSuccessArrow
  }
}
</script>

<style lang="scss">
.the-modal-auth__desktop-modal {
  @media screen and (max-width: 600px) {
    display: none !important;
  }
}

.the-modal-auth__main-lightbox {
  display: grid !important;
  grid-template-columns: minmax(265px, 600px) minmax(455px, 580px);

  .v-modal-lightbox__main {
    display: grid;
    grid-template-rows: auto auto 1fr;
    padding: {
      top: 35px;
      bottom: 50px;
    }
  }

  .v-modal-lightbox__cross {
    position: absolute;
    top: 16.5px;
    right: 17.5px;
  }

  @media screen and (max-width: 1024px) {
    .v-modal-lightbox__main {
      padding: 25px 40px 30px;
    }
  }

  @media screen and (max-width: 767px) {
    display: flex !important;

    .v-modal-lightbox__main {
      height: 545px;
      padding: 35px 50px 50px;
    }
  }
}

.the-modal-auth__lightbox-image-wrap {
  min-width: 265px;
  height: 545px;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.the-modal-auth__lightbox-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.the-modal-auth__description {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 20px;
  margin: 5px 0 15px;

  @media screen and (max-width: 1024px) {
    margin: 0 0 25px;
  }

  @media screen and (max-width: 767px) {
    margin: 5px 0 15px;
  }
}

.the-modal-auth__input {
  border-color: $gray2;
  border-radius: 4px !important;
}

.the-modal-auth__buttons-container {
  margin-top: auto;
}

.the-modal-auth__form-grid {
  grid-gap: 20px !important;

  @media screen and (max-width: 600px) {
    grid-gap: 15px !important;
  }
}

.the-modal-auth__mobile-modal {
  .the-mobile-modal__lightbox {
    padding-top: 75px !important;
  }
}

.the-modal-auth__mobile-modal-head {
  text-align: center;
  margin-bottom: 30px;
}

.the-modal-auth__mobile-modal-description {
  font-size: 16px;
  line-height: 24px;
  color: $gray3;
  margin-top: 10px;
}

.context-fade-enter-active,
.context-fade-leave-active {
  transition: opacity 0.2s;
}

.context-fade-enter,
.context-fade-leave-to {
  opacity: 0;
}
</style>
