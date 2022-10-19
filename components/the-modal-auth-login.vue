<template>
  <div class="the-modal-auth-login">
    <form class="the-modal-auth-login__form" @submit.prevent="submit">
      <div class="the-modal-auth-login__form-grid the-modal-auth__form-grid">
        <label class="form-field form-field--column">
          <span class="form-field__name">Type your Email</span>
          <v-input
            v-model="form.email"
            :invalid="$v.form.email.$error"
            :message="!$v.form.email.required ? 'Email is required' : 'Invalid email'"
            class="input the-modal-auth__input"
            placeholder="Username or Email"
          />
        </label>
        <label class="form-field form-field--column">
          <span class="form-field__name">Type your password</span>
          <v-input
            v-model="form.password"
            :invalid="$v.form.password.$error"
            :message="!$v.form.password.required ? 'Password is required' : 'Minimal length is 6'"
            class="input the-modal-auth__input"
            type="password"
          />
        </label>
      </div>
      <div class="buttons-container buttons-container--column buttons-container--top-auto">
        <v-button class="v-button--default v-button--round" type="submit">
          Continue
        </v-button>
        <span class="link link--primary-color link--center" @click="SET_MODAL_CONTEXT('register')">Close</span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      loading: false,
      context: {
        title: 'Sing in to Fine Vinum',
        description: 'Enter your details below'
      },
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  beforeMount () {
    this.$emit('change-context', this.context)
  },
  methods: {
    async submit () {
      this.$v.form.$touch()

      if (!this.$v.form.$invalid) {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })

          this.RECIEVE_WISHCOLLS()
          this.CLOSE_MODAL()
        } catch (e) {
          this.ADD_NOTIFICATION({
            reject: true,
            error: e.response.data.message
          })
        }
      }
    },
    ...mapMutations({
      SET_MODAL_CONTEXT: 'auth-modal/SET_MODAL_CONTEXT',
      CLOSE_MODAL: 'auth-modal/CLOSE_MODAL',
      ADD_NOTIFICATION: 'notifications/ADD_NOTIFICATION'
    }),
    ...mapActions({
      RECIEVE_WISHCOLLS: 'wishcolls/RECIEVE_WISHCOLLS'
    })
  }
}
</script>

<style lang="scss">
.the-modal-auth-login {
  display: grid;
}

.the-modal-auth-login__form {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.4s;

  @media screen and (max-width: 600px) {
    flex: 1;
  }
}

.the-modal-auth-login__form-grid {
  display: grid;
  grid-gap: 30px;

  @media screen and (max-width: 600px) {
    grid-gap: 40px;
  }
}
</style>
