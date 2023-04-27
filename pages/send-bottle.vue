<template>
  <main class="send-bottle">
    <div class="container">
      <form ref="form" class="send-bottle__form" @submit.prevent="submit">
        <div class="send-bottle__info">
          <span class="send-bottle__info-title">Send a bottle</span>
          <p class="send-bottle__form-description">
            To report a wine you can’t find in Winecollection, please fill out the form below. You’ll be informed when
            the bottle is added
          </p>
          <div class="send-bottle__reminders">
            <span class="send-bottle__info-subtitle">Please remember:</span>
            <ul class="send-bottle__reminders-list">
              <li class="sended-bottle__reminder">
                If you know a website or webshope where to find the wine, please put the URL in the comments-field.
              </li>
              <li class="sended-bottle__reminder">
                Try to get as much information as you can find about the wine and save us seareling the web.
              </li>
            </ul>
          </div>
        </div>
        <div class="send-bottle__photo">
          <v-input-file class="send-bottle__file-input" @recieve-files="form.files = $event"/>
          <div class="send-bottle__photo-requirement">
            <span class="send-bottle__photo-requirement-title">photography requirement</span>
            <p class="send-bottle__photo-requirement-description">
              My rule for stock photography is to submit photos that I can imagine many uses for!
              Imagine that the image might be used for
              anything from a desktop background to a postcard
              to a print that hangs in a home or office.
              It’s always a good idea to compose in a way that would allow so
            </p>
            <span
              class="link send-bottle__photo-rules link--primary-color"
              @click="rulesModal = true"
            >Read the rules</span>
          </div>
        </div>
        <fieldset class="send-bottle__fieldset">
          <legend class="title title--medium">
            Name
          </legend>
          <div class="form-field">
            <span class="form-field__name">Producers</span>
            <v-select v-slot="{ options }" :search-options="selects.producers">
              <v-select-option v-for="(value, id) of options" :key="id" :value="value">
                {{ value }}
              </v-select-option>
            </v-select>
          </div>
          <label class="form-field">
            <span class="form-field__name">Name</span>
            <v-input
              v-model="form.name"
              name="name"
              class="input"
              :invalid="$v.form.name.$error"
              placeholder="Unknown"
            />
          </label>
        </fieldset>
        <fieldset class="send-bottle__fieldset">
          <legend class="title title--medium">
            Geography
          </legend>

          <label class="form-field">
            <span class="form-field__name">Country</span>
            <v-input
              v-model="form.country"
              name="country"
              class="input"
              :invalid="$v.form.country.$error"
              placeholder="Unknown"
            />
          </label>

          <label class="form-field">
            <span class="form-field__name">Region</span>
            <v-input
              v-model="form.region"
              name="region"
              class="input"
              :invalid="$v.form.region.$error"
              placeholder="Unknown"
            />
          </label>
          <label class="form-field">
            <span class="form-field__name">Subregion</span>
            <v-input
              v-model="form.subregion"
              name="subregion"
              class="input"
              :invalid="$v.form.subregion.$error"
              placeholder="Unknown"
            />
          </label>
        </fieldset>
        <fieldset class="send-bottle__fieldset send-bottle__wine-colors">
          <legend class="title title--medium">
            Wine colors
          </legend>

          <div class="form-field form-field--center send-bottle__wine-colors-radio">
            <span class="form-field__name form-field__name-wine-color">Wine color</span>
            <div class="form-field__radio">
              <label class="label-input-button">
                <v-input-button
                  v-model="form.wine_color"
                  name="wine_color"
                  value="red"
                  :invalid="$v.form.wine_color.$error"
                  radio
                />
                <span class="label-input-button__text">Red wine</span>
              </label>
              <label class="label-input-button">
                <v-input-button
                  v-model="form.wine_color"
                  name="wine_color"
                  value="white"
                  :invalid="$v.form.wine_color.$error"
                  radio
                />
                <span class="label-input-button__text">White wine</span>
              </label>
            </div>
          </div>

          <label class="form-field">
            <span class="form-field__name form-field__name-wine-color">Wine style</span>
            <input type="text" class="input" placeholder="Unknown">
          </label>

          <label class="form-field">
            <span class="form-field__name form-field__name-wine-color">Variety of grapes</span>
            <input type="text" class="input" placeholder="Unknown">
          </label>
        </fieldset>
        <div class="send-bottle__info-scores">
          <fieldset class="send-bottle__fieldset send-bottle__wine-information">
            <legend class="title title--medium">
              Wine information
            </legend>

            <div class="send-bottle__input-set">
              <label class="form-field form-field--small">
                <span class="form-field__name">Vintage</span>
                <input class="input input--small" type="text" placeholder="2017">
              </label>
              <label class="form-field form-field--small">
                <span class="form-field__name">Size, ml</span>
                <v-input
                  v-model="form.volume"
                  class="input input--small"
                  name="volume"
                  :invalid="$v.form.volume.$error"
                  placeholder="ml"
                />
              </label>
              <label class="form-field form-field--small">
                <span class="form-field__name">Strength, %</span>
                <input class="input input--small" type="text" placeholder="%">
              </label>
            </div>
          </fieldset>

          <fieldset class="send-bottle__fieldset send-bottle__wine-scores">
            <legend class="title title--medium">
              Wine Scores
            </legend>

            <label class="form-field send-bottle__wine-scores-field form-field--mobile-row">
              <span class="form-field__name">Wine Advocate Robert Parker (WA)</span>
              <input class="input input--small" type="text" placeholder="50-100">
            </label>
            <label class="form-field send-bottle__wine-scores-field form-field--mobile-row">
              <span class="form-field__name">International wine challenge (IWC)</span>
              <input class="input input--small" type="text" placeholder="50-100">
            </label>
            <label class="form-field send-bottle__wine-scores-field form-field--mobile-row">
              <span class="form-field__name">Wine Spectator (WS)</span>
              <input class="input input--small" type="text" placeholder="50-100">
            </label>
            <label class="form-field send-bottle__wine-scores-field form-field--mobile-row">
              <span class="form-field__name">Jancis Robinson (JR)</span>
              <input class="input input--small" type="text" placeholder="50-100">
            </label>
            <label class="form-field send-bottle__wine-scores-field form-field--mobile-row">
              <span class="form-field__name">James Suckling (JS)</span>
              <input class="input input--small" type="text" placeholder="50-100">
            </label>
          </fieldset>
        </div>
        <fieldset class="send-bottle__fieldset send-bottle__comments">
          <legend class="title title--medium">
            Comments for administrator
          </legend>
          <textarea
            class="textarea send-bottle__comments-textarea"
            rows="8"
            cols="80"
            placeholder="Write what you would like to tell us ..."
          />

          <div class="buttons-container send-bottle__form-buttons">
            <v-button class="v-button--default v-button--default-secondary" type="reset">
              Cancell
            </v-button>
            <v-button class="v-button--default" type="submit">
              Enter
            </v-button>
          </div>
        </fieldset>
      </form>
    </div>

    <v-modal class="send-bottle__rules-modal" :active="rulesModal">
      <v-modal-lightbox title="Rules to add the photo" @close="rulesModal = false">
        <template #main>
          <div class="v-modal-lightbox__main-inner">
            <div class="send-bottle__rules-list">
              <div class="send-bottle__rule">
                <span class="send-bottle__rule-name">number 1</span>
                <p class="send-bottle__rule-description">My rule for stock photography is to submit photos that I can
                  imagine many uses for! Imagine that the image might be used for anything from a desktop background to
                  a postcard to a print that hangs in a home or office. It’s always a good idea to compose in a way that
                  would allow someone to add text or graphics to your image without detracting too much from the
                  quality.</p>
              </div>
              <div class="send-bottle__rule">
                <span class="send-bottle__rule-name">number 2</span>
                <p class="send-bottle__rule-description">My rule for stock photography is to submit photos that I can
                  imagine many uses for! Imagine that the image might be used for anything from a desktop background to
                  a postcard to a print that hangs in a home or office. It’s always a good idea to compose in a way that
                  would allow someone to add text or graphics to your image without detracting too much from the
                  quality.</p>
              </div>
              <div class="send-bottle__rule">
                <span class="send-bottle__rule-name">number 3</span>
                <p class="send-bottle__rule-description">My rule for stock photography is to submit photos that I can
                  imagine many uses for! Imagine that the image might be used for anything from a desktop background to
                  a postcard to a print that hangs in a home or office. It’s always a good idea to compose in a way that
                  would allow someone to add text or graphics to your image without detracting too much from the
                  quality.</p>
              </div>
              <div class="send-bottle__rule">
                <span class="send-bottle__rule-name">number 4</span>
                <p class="send-bottle__rule-description">My rule for stock photography is to submit photos that I can
                  imagine many uses for! Imagine that the image might be used for anything from a desktop background to
                  a postcard to a print that hangs in a home or office. It’s always a good idea to compose in a way that
                  would allow someone to add text or graphics to your image without detracting too much from the
                  quality.</p>
              </div>
            </div>
            <div class="buttons-container send-bottle__rules-buttons">
              <v-button default-secondary @click.native="rulesModal = false">Close</v-button>
              <v-button default>Add another photo</v-button>
            </div>
          </div>
        </template>
      </v-modal-lightbox>
    </v-modal>

    <v-modal class="send-bottle__success-modal" :active="successModal">
      <v-modal-lightbox
        title="Position added successfully"
        notification
        @close="successModal = false"
      >
        <template #main>
          <p class="v-modal-lightbox__notification-text">In the near future, our specialists will check the information
            and place your application. Thanks you!</p>
          <svg-success-arrow class="v-modal-lightbox__success-arrow"/>
          <v-button
            class="v-modal-lightbox__notification-button v-button--uppercase"
            default-secondary
            @click.native="successModal = false"
          >
            Close
          </v-button>
        </template>
      </v-modal-lightbox>
    </v-modal>

    <!-- <v-modal class="profile-modal" :active="modal">
      <v-modal-lightbox @close="modal = false" title="Edit Profile">
        <template #main>
          <div class="v-modal-lightbox__main-inner">
            <form class="v-modal-lightbox__form">
              <div class="v-modal-lightbox__form-grid">
                <div class="form-field form-field--modal form-field--center">
                  <span class="form-field__name">Gender</span>
                  <div class="form-field__radio">
                    <v-label-radio v-model="gender" name="gender" value="Male" />
                    <v-label-radio v-model="gender" name="gender" value="Female" />
                    <v-label-radio v-model="gender" name="gender" value="Not specified" />
                    <label class="label-input-button">
                      <v-input-button name="gender" v-model="gender" value="Male" radio />
                      <span class="label-input-button__text">Male</span>
                    </label>
                    <label class="label-input-button">
                      <v-input-button name="gender" v-model="gender" value="Female" radio />
                      <span class="label-input-button__text">Female</span>
                    </label>
                    <label class="label-input-button">
                      <v-input-button name="gender" v-model="gender" value="Not specified" radio />
                      <span class="label-input-button__text">Not specified</span>
                    </label>
                  </div>
                </div>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">Firstname</span>
                  <input class="input input--modal" type="text" placeholder="Firstname">
                </label>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">Lastname</span>
                  <input class="input input--modal" type="text" placeholder="Lastname">
                </label>
                <label class="form-field form-field--modal">
                  <span class="form-field__name">About me</span>
                  <textarea class="textarea textarea--modal" placeholder="Info about shop"></textarea>
                </label>
                <div class="form-field form-field--modal">
                  <span class="form-field__name">Country</span>
                  <v-select class="v-select--modal" />
                </div>
                <div class="form-field form-field--modal">
                  <label class="label-input-button label-input-button--modal">
                    <v-input-button class="profile-modal__checkbox" />
                    <span class="label-input-button__text">Subscribe to our newsletter</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </template>
      </v-modal-lightbox>
    </v-modal> -->

    <!-- <v-modal :active="modal2">
      <v-modal-lightbox @close="modal2 = false" title="Your letter has been sent" notification>

      </v-modal-lightbox>
    </v-modal> -->
  </main>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

import SvgSuccessArrow from '~/assets/icons/success-arrow.svg?inline'

export default {
  data () {
    return {
      rulesModal: false,
      successModal: false,
      form: {
        name: '',
        country: '',
        region: '',
        subregion: '',
        wine_color: '',
        volume: '',
        files: []
      },
      selects: {
        producers: [
          'producer №1',
          'producer №2',
          'producer №3',
          'producer №4',
          'producer №5',
          'producer №6',
          'producer №7',
          'producer №8',
          'producer №9',
          'producer №10',
          'producer №11',
          'producer №12'
        ]
        // countries: [
        //   'France',
        //   'USA',
        //   'Argentina',
        //   'Mexico',
        //   'Spain',
        //   'Chilly',
        //   'Brazill',
        //   'Australia'
        // ],
        // regions: [
        //   'France Region',
        //   'USA Region',
        //   'Argentina Region',
        //   'Mexico Region',
        //   'Spain Region',
        //   'Georgia Region',
        //   'Chilly Region',
        //   'Brazill Region',
        //   'Australia Region'
        // ],
        // subregions: [
        //   'France Region Subregion',
        //   'USA Region Subregion',
        //   'Argentina Region Subregion',
        //   'Mexico Region Subregion',
        //   'Spain Region Subregion',
        //   'Georgia Region Subregion',
        //   'Chilly Region Subregion',
        //   'Brazill Region Subregion',
        //   'Australia Region Subregion'
        // ]
      }
    }
  },
  validations: {
    form: {
      name: { required },
      country: { required },
      region: { required },
      subregion: { required },
      wine_color: { required },
      volume: { required }
    }
  },
  methods: {
    async submit () {
      if (this.$auth.loggedIn) {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          try {
            const requestData = new FormData(this.$refs.form)

            requestData.set('username', this.$auth.user.name)
            requestData.set('category_id', 1)
            requestData.set('wine_types', 'Some type of wine')
            requestData.delete('photo')

            for (const file of this.form.files) {
              requestData.append(file.name, file, file.name)
            }

            await this.$axios.post('products', requestData)

            this.successModal = true
          } catch (e) {
            console.log(e)
          }
        }
      } else {
        this.OPEN_MODAL('register')
      }
    },
    ...mapMutations({
      OPEN_MODAL: 'auth-modal/OPEN_MODAL'
    })
  },
  components: {
    SvgSuccessArrow
  }
}
</script>

<style lang="scss">
.send-bottle {
  padding: 40px 0 80px;

  @media screen and (max-width: 600px) {
    padding-top: 125px;
  }
}

.send-bottle__form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto;
    grid-gap: 50px;
  }
}

.send-bottle__form-description {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 22px;
  }
}

.send-bottle__reminders {
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    margin-top: 35px;
  }
}

.send-bottle__reminders-list {
  margin-top: 5px;
}

.sended-bottle__reminder {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;

  &::before {
    content: '• ';
    font-size: 18px;
    font-weight: 600;
  }
}

.send-bottle__photo {
  display: flex;
  align-items: center;
  grid-row: span 2;

  @media screen and (max-width: 1024px) {
    grid-row: auto;
    order: 1;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}

.send-bottle__photo-requirement {
  display: grid;
  grid-gap: 20px;
}

.send-bottle__photo-requirement-title {
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
}

.send-bottle__photo-requirement-description {
  max-width: 280px;
  font-size: 14px;
  line-height: 24px;
  color: $gray3;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
}

.send-bottle__photo-rules {
  font-size: 14px;
  line-height: 26px;
  font-weight: 600;
}

.send-bottle__file-input {
  width: calc(260 / 570 * 100%);
  min-width: 220px;
  height: 100%;
  margin-right: 35px;

  @media screen and (max-width: 1024px) {
    min-width: 335px;
    height: 540px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 610px;
    min-width: 0;
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.send-bottle__wine-information {
  @media screen and (max-width: 1024px) {
    .input {
      width: 100px !important;
    }
  }
}

.send-bottle__fieldset {
  display: grid;
  grid-template-rows: max-content;
  grid-gap: 10px;
}

.send-bottle__legend {
  display: grid;
  grid-gap: 10px;
  height: fit-content;
}

.profile-modal__checkbox {
  width: 36px !important;
  height: 36px !important;
  border-radius: 0 !important;

  & .v-input-button__thumb {
    width: 20px;
    height: 20px;
    background-image: url('../assets/icons/success-arrow.svg');
    background-repeat: no-repeat;
    background-color: inherit;
  }
}

.form-field__name-wine-color {
  min-width: 160px;

  @media screen and (max-width: 600px) {
    min-width: 0;
  }
}

.send-bottle__input-set {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;

  @media screen and (max-width: 400px) {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-flow: row;
    grid-gap: inherit;
  }
}

.send-bottle__info-title {
  font-size: 24px;
  line-height: 48px;
  color: $gray1;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.send-bottle__info-subtitle {
  font-size: 16px;
  line-height: 36px;
  color: $gray1;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.send-bottle__info-scores {
  display: grid;
  grid-gap: inherit;
}

.send-bottle__comments {
  @media screen and (max-width: 1024px) {
    order: 3;
  }
}

.send-bottle__comments-textarea {
  height: 310px;

  @media screen and (max-width: 1024px) {
    height: 230px;
  }
}

.send-bottle__form-buttons {
  margin-top: auto;

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
  }
}

.send-bottle__wine-scores-field {
  justify-content: space-between;
  max-width: 360px;

  &:nth-child(n+4) {
    max-width: 250px;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
  }
}

.send-bottle__wine-colors {
  @media screen and (max-width: 1024px) {
    order: 2;
  }
}

.send-bottle__wine-colors-radio {
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    flex-direction: row;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.send-bottle__rules-modal {
  .v-modal-lightbox__title {
    font-size: 18px;
  }
}

.send-bottle__rules-list {
  display: grid;
  grid-gap: 30px;
}

.send-bottle__rule {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
}

.send-bottle__rule-name {
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
}

.send-bottle__rule-description {
  font-size: 14px;
  line-height: 24px;
}

.send-bottle__rules-buttons {
  margin-top: 40px;
}

.send-bottle__success-modal {
  .v-modal-lightbox__title {
    font-size: 18px;
  }
}
</style>
