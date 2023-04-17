<template>
  <v-modal class="profile-modal" :active="active">
    <v-modal-lightbox title="Edit Profile" @close="close">
      <template #main>
        <div class="v-modal-lightbox__main-inner">
          <form class="v-modal-lightbox__form">
            <div class="v-modal-lightbox__form-grid">
              <div class="form-field form-field--modal form-field--center">
                <span class="form-field__name">Gender</span>
                <div class="form-field__radio">
                  <v-label-radio
                    v-model="form.gender"
                    name="gender"
                    value="Male"
                  />
                  <v-label-radio
                    v-model="form.gender"
                    name="gender"
                    value="Female"
                  />
                  <v-label-radio
                    v-model="form.gender"
                    name="gender"
                    value="Not specified"
                  />
                </div>
              </div>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Firstname</span>
                <input
                  v-model="form.name"
                  class="input input--modal"
                  type="text"
                  placeholder="Firstname"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Lastname</span>
                <input
                  v-model="form.last_name"
                  class="input input--modal"
                  type="text"
                  placeholder="Lastname"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">About me</span>
                <textarea
                  v-model="form.about_me"
                  class="textarea textarea--modal"
                  placeholder="Info about shop"
                />
              </label>
              <div class="form-field form-field--modal">
                <span class="form-field__name">Country</span>
                <v-select-country class="v-select--modal" @select="select" />
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
                @click.native="send"
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
</template>

<script>

export default {
  name: 'VModalUserEdit',
  props: {
    active: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      form: {
        country: '',
        gender: 'Not specified',
        name: '',
        last_name: '',
        about_me: '',
        subscribe: false
      }
    }
  },
  methods: {
    select (val) {
      this.form.country = val
    },
    send () {
      this.$axios.post('/profile', {
        ...this.form
      })
    },
    close () {
      this.$emit('close')
    }
  }
}

</script>

<style scoped>

</style>
