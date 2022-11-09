<template>
  <main class="contacts">
    <v-banner :src="require('~/assets/images/banner-6.png')" />
    <v-page-preview title="Contact Us">
      <p class="v-page-preview__paragraph">If you would like to find out more about our services, the team is here to help - so no matter whether you're looking for a valuation, have a collection of bottles you'd like to sell or even if you just have a query about buying whisky at auction.
      Please don't hesitate to get in touch with us.</p>
    </v-page-preview>
    <section class="contacts-info">
      <div class="container container--narrow">
        <div class="contacts-info__sections">
          <div class="contacts-info__section">
            <div class="contacts-info__section-inner">
              <span class="contacts-info__section-title">Partnership</span>
              <ul class="contacts-info__section-list">
                <li class="contacts-info__section-list-item">Winecollection</li>
                <li class="contacts-info__section-list-item">+38 (044) 220 20 20</li>
                <li class="contacts-info__section-list-item">+38 (044) 224 20 20</li>
              </ul>
            </div>
          </div>
          <div class="contacts-info__section">
            <div class="contacts-info__section-inner">
              <span class="contacts-info__section-title">Technical service</span>
              <ul class="contacts-info__section-list">
                <li class="contacts-info__section-list-item">Techicalwc@gmail.com</li>
                <li class="contacts-info__section-list-item">+38 (044) 219 20 20</li>
                <li class="contacts-info__section-list-item">+38 (044) 219 19 19</li>
              </ul>
            </div>
          </div>
          <div class="contacts-info__section">
            <div class="contacts-info__section-inner">
              <span class="contacts-info__section-title">Head Office Address</span>
              <ul class="contacts-info__section-list">
                <li class="contacts-info__section-list-item">West Building</li>
                <li class="contacts-info__section-list-item">Ruthvenfield Grove</li>
                <li class="contacts-info__section-list-item">Inveralmond Industrial Estate</li>
                <li class="contacts-info__section-list-item">Perth</li>
                <li class="contacts-info__section-list-item">United Kingdom</li>
                <li class="contacts-info__section-list-item">PH1 3FN</li>
              </ul>
            </div>
          </div>
          <div class="contacts-info__section">
            <div class="contacts-info__section-inner">
              <span class="contacts-info__section-title">legal status</span>
              <ul class="contacts-info__section-list">
                <li class="contacts-info__section-list-item">Company No. 4449145</li>
                <li class="contacts-info__section-list-item">VAT Registration No. GB735785005</li>
                <li class="contacts-info__section-list-item contacts-info__section-list-item--lower">Registered in England and Wales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="customer-service">
      <div class="container container--narrow">
        <p class="customer-service__description">
          Please fill out the form below and a member of our Customer Service team will get back to you as soon as possible.
        </p>
        <form class="customer-service__form" @submit.prevent="submit">
          <div class="customer-service__form-fiqure">
            <img class="customer-service__form-fiqure-img" :src="require('~/assets/images/customer-services-form-image.png')" alt="customer-service-image">
          </div>
          <label class="form-field form-field--column">
            <span class="form-field__name form-field__name--uppercase">Your name</span>
            <v-input
              type="text"
              class="input"
              placeholder="Your name"
              v-model="form.name"
              :invalid="name.$error"
              :message="!name.required ? 'Password is required' : 'Minimal length is 3'"
            />
          </label>

          <label class="form-field form-field--column">
            <span class="form-field__name form-field__name--uppercase">Email</span>
            <v-input
              type="text"
              class="input"
              placeholder="Your email"
              v-model="form.email"
              :invalid="email.$error"
              :message="!email.required ? 'Email is required' : 'Invalid Email'"
            />
          </label>

          <label class="form-field form-field--column">
            <span class="form-field__name form-field__name--uppercase">Telephone</span>
            <v-input
              type="text"
              class="input"
              placeholder="Your phone"
              v-model="form.telephone"
              :invalid="telephone.$error"
              :message="!telephone.required ? 'Phone is required' : 'Invalid Phone'"
            />
          </label>

          <label class="form-field form-field--column customer-service__message">
            <span class="form-field__name form-field__name--uppercase">Message</span>
            <textarea
              class="textarea customer-service__form-textarea"
              cols="30"
              rows="10"
              placeholder="Write what you would like to tell us ..."
              v-model="form.message"
            ></textarea>
            <span
            class="v-input__error v-input-pos"
              v-if="$v.form.message.$error"
            >{{ form.message.required ? 'Message is required' : 'Minimal length is 6' }}</span>
          </label>

          <div class="buttons-container customer-service__buttons-container">
            <div class="customer-service__checkbox-field">
              <label class="label-input-button">
                <v-input-button class="customer-service__checkbox" v-model="form.captcha" />
                <span class="label-input-button__text">I'm not robot</span>
              </label>
            </div>
            <v-button type="submit" class="v-button--uppercase" default>Enter</v-button>
            <span
                class="v-input__error v-input-pos"
                v-if="$v.form.captcha.$error"
              >Complete the captcha</span>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, email, sameAs, minLength, helpers } from 'vuelidate/lib/validators'
const number = helpers.regex(
  'serial',
  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
)
export default {
  data () {
    return {
      active: false,
      form: {
        name: '',
        email: '',
        telephone: '',
        message: '',
        captcha: false
      }
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      telephone: { required, number },
      message: { required, minLength: minLength(6) },
      captcha: { sameAs: sameAs(() => true) }
    }
  },
  computed: {
    name () {
      return this.$v.form.name
    },
    email () {
      return this.$v.form.email
    },
    telephone () {
      return this.$v.form.telephone
    },
    message () {
      return this.$v.form.message
    },
    captcha () {
      return this.$v.form.captcha
    }
  },
  methods: {
    async submit () {
      this.$v.form.$touch()
      if (!this.$auth.loggedIn) {
        return this.OPEN_MODAL('login')
      }
      if (this.$v.form.$invalid) {
        return false
      }
      try {
        this.fetching = true

        await this.$axios.$post('https://app.finevinume.com/api/support', {
          data: {
            Username: this.name,
            problem_text: this.message,
            problem_link: this.message,
            email: this.email,
            telephone: this.telephone
          },
          headers: {
            Authorization: `Bearer ${this.$auth.user.api_token}`
          }
        })

        this.OPEN_SUCCESS_MODAL()
      } catch (e) {
        const errors = e.response.data.message.errors

        let error

        if (!errors) {
          return this.OPEN_SUCCESS_MODAL()
        }

        this.ADD_NOTIFICATION({ reject: true, error })
      } finally {
        this.fetching = false
      }
    },
    ...mapMutations({
      OPEN_MODAL: 'auth-modal/OPEN_MODAL'
    })
  }
}
</script>

<style lang="scss">
.v-input-pos {
  position: initial;
}
.contacts {
  padding-bottom: 80px;
}

.contacts-info {
  padding-top: 15px;
}

.contacts-info__sections {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  border-bottom: 1px solid $gray6;
  padding-bottom: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 40px 10px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: auto;
    grid-gap: 20px;
  }
}

.contacts-info__section {
  @media screen and (max-width: 1024px) {
    border: 1px solid $gray6;
    box-shadow: 0px 4px 4px rgba(206, 206, 206, 0.1);
    padding: 25px 0;
  }

  @media screen and (max-width: 600px) {
    border: 0;
    box-shadow: none;
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    border: 1px solid $gray6;
    box-shadow: 0px 4px 4px rgba(206, 206, 206, 0.1);
    padding: 25px 0;
  }
}

.contacts-info__section-inner {
  @media screen and (max-width: 1024px) {
    margin-left: 80px;
    margin-right: 50px;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: auto;
  }

  @media screen and (max-width: 400px) {
    width: calc(100% - 40px);
    margin: 0 auto;
  }
}

.contacts-info__section-title {
  font-size: 18px;
  line-height: 36px;
  color: $gray1;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
}

.contacts-info__section-list {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 22px;
  }
}

.contacts-info__section-list-item--lower {
  margin-top: 26px;
}

.customer-service {
  font-family: $Montserrat;
  padding-top: 45px;

  @media screen and (max-width: 1024px) {
    padding-top: 25px;
  }

  @media screen and (max-width: 600px) {
    .form-field__name {
      margin-bottom: 10px;
    }
  }
}

.customer-service__description {
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 24px;
  }
}

.customer-service__form {
  display: grid;
  grid-template-columns: minmax(0, 550px) minmax(400px, 1fr);
  grid-column-gap: 30px;
  grid-gap: 20px;
  padding-top: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 270px 1fr;
    grid-template-rows: repeat(3, 75px);
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 15px;
  }
}

.customer-service__form-fiqure {
  grid-row: span 5;

  @media screen and (max-width: 1024px) {
    grid-row: span 3;
  }

  @media screen and (max-width: 600px) {
    grid-row: auto;
    height: 250px;
  }
}

.customer-service__form-fiqure-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.customer-service__message {
  @media screen and (max-width: 1024px) {
    grid-column: span 2;
  }

  @media screen and (max-width: 600px) {
    grid-column: auto;
  }
}

.customer-service__form-textarea {
  height: 160px;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }
}

.customer-service__checkbox-field {
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid $gray5;
  border-radius: 2px;
  font-family: $Montserrat;
  padding: 0 20px;
}

.customer-service__buttons-container {
  grid-template-columns: minmax(0, 230px) minmax(100px, auto);
  font-family: $Open-Sans;
  margin-top: auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 270px minmax(0, 385px);
    grid-column: span 2;
  }

  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
    grid-column: auto;
    margin-top: 5px;
  }
}

.customer-service__checkbox {
  border-color: $gray5 !important;
}
</style>
