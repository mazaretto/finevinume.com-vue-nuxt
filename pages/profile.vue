<template>
  <main class="profile">
    <section class="profile__head">
      <div class="container profile__head-container">
        <v-avatar
          class="profile__avatar"
          v-if="$auth && $auth.user && $auth.user.photo"
          :src="'http://localhost:8000/storage/' + $auth.user.photo"
          @click.native="editAvatarModal = !editAvatarModal"
        />
        <v-avatar class="profile__avatar" v-else @click.native="editAvatarModal = !editAvatarModal"/>
        <span class="profile__username">{{
            $auth.user ? $auth.user.name : 'undefined'
          }}</span>
        <div class="profile__head-bottom">
          <div class="profile__statuses">
            <span class="profile__status">Senior member</span>
            <span class="profile__status">Online</span>
          </div>
          <span
            class="link profile__edit-profile-link"
            @click="editProfileModal = true"
          >Edit profile
          </span>
        </div>
      </div>
    </section>
    <section class="profile__main">
      <div class="profile__lists-buttons">
        <div class="profile__lists-buttons-inner">
          <v-button
            v-for="(list, id) in lists"
            :key="id"
            class="profile__lists-button"
            :class="{ 'profile__lists-button--active': checkPath(list) }"
            @click.native="
              $router.replace({ path: `/profile/${list.toLowerCase()}` })
            "
          >
            {{ list }}
          </v-button>
        </div>
      </div>
      <div class="container">
        <div class="profile__info-panel">
          <span class="profile__total-wines-title">Total wines - 27</span>
          <div class="profile__info-panel-buttons">
            <v-button class="profile__info-panel-button" default-secondary>
              +Add a shoplink
            </v-button>
            <nuxt-link to="/send-bottle">
              <v-button class="profile__info-panel-button" default-secondary>
                +Add a bottle
              </v-button>
            </nuxt-link>
            <v-button
              class="profile__separate-button v-button--uppercase"
              default
            >
              Separate
            </v-button>
          </div>
        </div>
      </div>
      <div class="profile__products">
        <nuxt-child/>
      </div>
    </section>

    <v-modal class="profile-modal" :active="editProfileModal">
      <v-modal-lightbox title="Edit Profile" @close="editProfileModal = false">
        <template #main>
          <div class="v-modal-lightbox__main-inner">
            <form class="v-modal-lightbox__form">
              <div class="v-modal-lightbox__form-grid">
                <div class="form-field form-field--modal form-field--center">
                  <span class="form-field__name">Gender</span>
                  <div class="form-field__radio">
                    <v-label-radio
                      v-model="gender"
                      name="gender"
                      value="Male"
                    />
                    <v-label-radio
                      v-model="gender"
                      name="gender"
                      value="Female"
                    />
                    <v-label-radio
                      v-model="gender"
                      name="gender"
                      value="Not specified"
                    />
                  </div>
                </div>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">Firstname</span>
                  <input
                    class="input input--modal"
                    type="text"
                    placeholder="Firstname"
                  >
                </label>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">Lastname</span>
                  <input
                    class="input input--modal"
                    type="text"
                    placeholder="Lastname"
                  >
                </label>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">About me</span>
                  <textarea
                    class="textarea textarea--modal"
                    placeholder="Info about shop"
                  />
                </label>
                <div class="form-field form-field--modal">
                  <span class="form-field__name">Country</span>
                  <v-select-country class="v-select--modal" @select="select()"/>
                </div>
                <div class="form-field form-field--modal">
                  <label class="label-input-button label-input-button--modal">
                    <v-input-button class="profile-modal__checkbox"/>
                    <span
                      class="label-input-button__text"
                    >Subscribe to our newsletter</span>
                  </label>
                </div>
                <v-button
                  class="v-button the-footer__newsletter-button v-button--uppercase v-button--default"
                >
                  Send
                </v-button>
              </div>
            </form>
          </div>
        </template>
      </v-modal-lightbox>
    </v-modal>

    <v-modal class="profile-modal" :active="editAvatarModal">
      <v-modal-lightbox title="Change Avatar" @close="editAvatarModal = false">
        <template #main>
          <div class="v-modal-lightbox__main-inner">
            <form class="v-modal-lightbox__form">
              <div class="v-modal-lightbox__form-grid">
                <div class="form-field form-field--modal form-field--center">
                  <label class="form-field__name">
                    <input ref="image" type="file" @change="handleFileUpload">
                  </label>
                </div>
                <v-button
                  @click.native="submitFileUpload"
                  class="v-button the-footer__newsletter-button v-button--uppercase v-button--default"
                >
                  Send
                </v-button>
              </div>
            </form>
          </div>
        </template>
      </v-modal-lightbox>
    </v-modal>
  </main>
</template>
<script>

export default {
  data () {
    return {
      editProfileModal: false,
      editAvatarModal: false,
      image: '',
      gender: '',
      lists: ['Collection', 'Wishlist', 'Rates', 'Notes', 'Shoplinks'],
      form: {
        country: ''
      }
    }
  },
  methods: {
    handleFileUpload () {
      this.image = this.$refs.image.files[0]
    },
    submitFileUpload () {
      let formData = new FormData()
      formData.append('avatar', this.image)

      this.$axios.post('/profile/change-avatar',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      this.editAvatarModal = false
    },
    checkPath (path) {
      const paths = this.$route.fullPath.split('/')
      const currentPath = paths[paths.length - 1]

      return currentPath === path.toLowerCase()
    },
    select (val) {
      console.log(val)
      this.form.country = val
    }
  }
}
</script>

<style lang="scss">
.profile {
  @media screen and (max-width: 600px) {
    padding-top: 85px;
  }
}

.profile__head {
  font-family: $Montserrat;
  background-color: $gray6;
  padding: {
    top: 20px;
    bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 10px;
  }
}

.profile__head-container {
  position: relative;
  padding-left: 120px;

  @media screen and (max-width: 600px) {
    padding-left: 100px;
  }
}

.profile__avatar {
  position: absolute;
  left: 0;

  @media screen and (max-width: 1024px) {
    width: 110px !important;
    height: 110px !important;
  }

  @media screen and (max-width: 600px) {
    width: 90px !important;
    height: 90px !important;
    top: 5px;
  }

  @media screen and (max-width: 320px) {
    width: 80px !important;
    height: 80px !important;
  }
}

.profile__username {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
}

.profile__head-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
}

.profile__statuses {
  display: grid;
  justify-content: flex-start;
  grid-auto-flow: column;
  grid-gap: 20px;

  @media screen and (max-width: 320px) {
    grid-auto-flow: row;
    grid-gap: 10px;
  }
}

.profile__edit-profile-link {
  @media screen and (max-width: 400px) {
    margin-top: 5px;
  }
}

.profile__lists-buttons {
  @media screen and (max-width: 767px) {
    overflow-x: scroll;
    @include noScrollbar;
  }
}

.profile__lists-buttons-inner {
  display: flex;
  align-items: center;
  width: 1180px;
  font-size: 18px;
  color: $gray1;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    width: 92.1875%;
    min-width: 720px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 767px) {
    box-sizing: content-box;
    padding-left: calc((100% - 93.75%) / 2);
    padding-right: calc((100% - 93.75%) / 2);
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
  }
}

.profile__lists-button {
  flex: 1;
  height: 60px;
  background-color: #fff;
  border: 1px solid $gray6;

  &:hover {
    background-color: $primary-color;
    border-color: $primary-color;
    color: #fff;
  }

  &:first-of-type {
    min-width: 230px;
    border-bottom-left-radius: 8px;

    .v-button__inner {
      justify-content: flex-start;
      padding-left: 119px;
    }
  }

  &:last-of-type {
    border-bottom-right-radius: 8px;
  }
}

.profile__lists-button--active {
  background-color: $primary-color;
  border-color: $primary-color !important;
  color: #fff;
}

.profile__info-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 30px;
  }
}

.profile__total-wines-title {
  font-family: $Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: $gray1;

  @media screen and (max-width: 600px) {
    align-self: center;
  }
}

.profile__info-panel-buttons {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 113px);
  grid-gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: auto;
  }
}

.profile__info-panel-button {
  height: 40px !important;
  font-size: 12px;
  line-height: 16px;

  .v-button__inner {
    padding: 0 10px;
    white-space: nowrap;
  }
}

.profile__info-panel-button {
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.profile__separate-button {
  display: none;
  grid-column: span 2;

  @media screen and (max-width: 600px) {
    display: block;
  }

  @media screen and (max-width: 320px) {
    grid-column: auto;
  }
}

.profile__products {
  padding-top: 15px;
}
</style>
