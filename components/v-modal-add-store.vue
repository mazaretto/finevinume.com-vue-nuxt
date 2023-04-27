<template>
  <v-modal class="profile-modal" :active="active">
    <v-modal-lightbox title="Add shoplink" @close="close">
      <template #main>
        <div class="v-modal-lightbox__main-inner">
          <form class="v-modal-lightbox__form">
            <div class="v-modal-lightbox__form-grid">
              <label class="form-field form-field--modal">
                <span class="form-field__name">Name</span>
                <input
                  v-model="form.name"
                  class="input input--modal"
                  type="text"
                  placeholder="Name"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Wines</span>
                <input
                  v-model="form.wines"
                  class="input input--modal"
                  type="number"
                  placeholder="Wines count"
                >
              </label>
              <div class="form-field form-field--modal">
                <span class="form-field__name">Country</span>
                <v-select-country class="v-select--modal" @select="select" />
              </div>
              <label class="form-field form-field--modal">
                <span class="form-field__name">City</span>
                <input
                  v-model="form.city"
                  class="input input--modal"
                  type="text"
                  placeholder="Lastname"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Postal code</span>
                <input
                  v-model="form.postal_code"
                  class="input input--modal"
                  type="text"
                  placeholder="Postal code"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Street name</span>
                <input
                  v-model="form.street_name"
                  class="input input--modal"
                  type="text"
                  placeholder="Street name"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Phone</span>
                <input
                  v-model="form.phone"
                  class="input input--modal"
                  type="text"
                  placeholder="Phone"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Email</span>
                <input
                  v-model="form.email"
                  class="input input--modal"
                  type="email"
                  placeholder="Email"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Website</span>
                <input
                  v-model="form.website"
                  class="input input--modal"
                  type="text"
                  placeholder="Website"
                >
              </label>
              <label class="form-field form-field--modal">
                <span class="form-field__name">Info</span>
                <textarea
                  v-model="form.info"
                  class="textarea textarea--modal"
                  placeholder="Info"
                />
              </label>
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
  name: 'VModalAddStore',
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
        name: '',
        info: '',
        website: '',
        email: '',
        street_name: '',
        postal_code: '',
        city: '',
        wines: ''
      }
    }
  },
  methods: {
    select (val) {
      this.form.country = val
    },
    send () {
      this.$axios.post('/add-shoplink', {
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
