<template>
  <client-only>
    <div class="the-modal-auth-register">
      <transition name="toggle-forms" mode="out-in">
        <form v-if="!active" class="the-modal-auth-register__form" key="first-form" @submit.prevent="validate">
          <div class="the-modal-auth-register__form-grid">
            <label class="form-field form-field--column">
              <span class="form-field__name">Type your email</span>
              <v-input
                v-model="form.first.email"
                class="input the-modal-auth__input"
                :invalid="email.$error"
                :message="!email.required ? 'Email is required' : 'Invalid email'"
                placeholder="Your email"
              />
            </label>
            <label class="label-input-button the-modal-auth-register__label">
              <v-input-button
                v-model="form.first.privacy"
                class="the-modal-auth-register__checkbox"
                :invalid="privacy.$error"
              />
              <span class="label-input-button__text" :class="{'label-input-button__text--error': $v.form.first.privacy.$error}">
                I accept Terms of use and Privacy Police
              </span>
            </label>
          </div>
          <div class="buttons-container the-modal-auth-register__buttons-container buttons-container--column">
            <v-button class="v-button--default v-button--round" type="submit">
              Continue
            </v-button>
            <span class="link link--primary-color link--center" @click="SET_MODAL_CONTEXT('login')">I already have a profile</span>
          </div>
        </form>

        <form v-else class="the-modal-auth-register__form" key="second-form" @submit.prevent="submit">
          <div class="the-modal-auth-register__form-grid the-modal-auth__form-grid">
            <label class="form-field form-field--column">
              <span class="form-field__name">Type your Username</span>
              <v-input
                v-model="form.second.name"
                class="input the-modal-auth__input"
                :invalid="name.$error"
                :message="!name.required ? 'Username is required' : 'Minimal length is 3'"
                placeholder="Username"
              />
            </label>
            <label class="form-field form-field--column">
              <span class="form-field__name">Type your Password</span>
              <v-input
                v-model="form.second.password"
                class="input the-modal-auth__input"
                :invalid="password.$error"
                :message="!password.required ? 'Password is required' : 'Minimal length is 6'"
                type="password"
              />
            </label>
            <span class="link">Forgot your password</span>
          </div>
          <div class="buttons-container buttons-container--column buttons-container--top-auto">
            <v-button default class="v-button--round" type="submit">
              Continue
            </v-button>
            <span class="link link--primary-color link--center" @click="active = false">Close</span>
          </div>
        </form>
      </transition>
    </div>
  </client-only>
</template>

<script>
import { mapMutations } from 'vuex'

import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      fetching: false,
      active: false,
      context: {
        title: 'Join Wine Collection',
        description: 'Create a profile to save, rate and discover the right wine for you!'
      },
      form: {
        first: {
          email: '',
          privacy: false
        },
        second: {
          name: '',
          password: ''
        }
      }
    }
  },
  validations: {
    form: {
      first: {
        email: { required, email },
        privacy: { sameAs: sameAs(() => true) }
      },
      second: {
        name: { required, minLength: minLength(3) },
        password: { required, minLength: minLength(6) }
      }
    }
  },
  computed: {
    email () {
      return this.$v.form.first.email
    },
    privacy () {
      return this.$v.form.first.privacy
    },
    name () {
      return this.$v.form.second.name
    },
    password () {
      return this.$v.form.second.password
    }
  },
  beforeMount () {
    this.$emit('change-context', this.context)
  },
  methods: {
    validate () {
      this.$v.form.first.$touch()

      this.active = !this.$v.form.first.$error
    },
    async submit () {
      this.$v.form.second.$touch()

      if (!this.$v.form.$invalid) {
        try {
          this.fetching = true

          await this.$axios.$post('register', {
            email: this.form.first.email,
            login: this.form.second.name,
            name: this.form.second.name,
            password: this.form.second.password
          })

          this.$auth.loginWith('local', {
            data: {
              email: this.form.first.email,
              password: this.form.second.password
            }
          })
          this.OPEN_SUCCESS_MODAL()
        } catch (e) {
          const errors = e.response.data.message.errors

          let error

          if (!errors) {
            return this.OPEN_SUCCESS_MODAL()
          }

          if (errors.email && errors.login) {
            error = 'The email and login has already been taken.'
          } else if (errors.login) {
            error = errors.login[0]
          } else if (errors.email) {
            error = errors.email[0]
          } else {
            error = 'Something went wrong, try later'
          }

          this.ADD_NOTIFICATION({ reject: true, error })
        } finally {
          this.fetching = false
        }
      }
    },
    ...mapMutations({
      SET_MODAL_CONTEXT: 'auth-modal/SET_MODAL_CONTEXT',
      OPEN_SUCCESS_MODAL: 'auth-modal/OPEN_SUCCESS_MODAL',
      ADD_NOTIFICATION: 'notifications/ADD_NOTIFICATION'
    })
  },
  watch: {
    fetching () {
      this.$emit('fetch')
    }
  }
}
</script>

<style lang="scss">
.the-modal-auth-register {
  display: flex;
  flex-direction: column;
}

.the-modal-auth-register__form {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.4s;
  flex: 1;
}

.the-modal-auth-register__form-grid {
  display: grid;
  grid-gap: 30px;

  @media screen and (max-width: 600px) {
    grid-gap: 40px;
  }
}

.the-modal-auth-register__label {
  font-family: $Montserrat;

  @media screen and (max-width: 600px) {
    .label-input-button__text {
      margin-left: 20px;
    }
  }
}

.the-modal-auth-register__checkbox {
  width: 20px !important;
  height: 20px !important;
  border-color: $gray1;
  border-radius: 4px;

  .v-input-button__thumb {
    background-color: transparent;
    background-image: url('~/assets/icons/register-checkbox-arrow.svg');
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 600px) {
    min-width: 36px;
    height: 36px !important;

    .v-input-button__thumb {
      background-image: url('~/assets/icons/register-checkbox-arrow-mobile.svg');
    }
  }
}

.the-modal-auth-register__buttons-container {
  margin-top: 50px;
}

.toggle-forms-enter-active,
.toggle-forms-leave-active {
  transition: opacity 0.2s;
}

.toggle-forms-enter,
.toggle-forms-leave-to {
  opacity: 0;
}
</style>
