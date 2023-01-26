<!-- <template>
  <nuxt />
</template> -->
<template>
  <div class="not-found">
    <div class="not-found__container">
      <div class="not-found__message">
        <span class="not-found__message-title">404</span>
        <div class="not-found__message-subtitle">Page not found</div>
        <p class="not-found__message-description">Sorry, we couldn’t find the page you are looking for</p>
        <v-button
          class="not-found__message-button v-button--uppercase v-button--round"
          default
          @click.native="$router.push({ name: 'index' })"
        >
          Go to home page
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>

<style lang="scss">
.not-found {
  height: 100vh;
  background-color: #020001;
  background-image: url('../assets/images/404.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 70%;
  padding-top: 80px;
  color: $gray4;

  @media screen and (max-width: 1024px) {
    background-position: center bottom;
    background-size: 100%;
  }

  @media screen and (max-width: 600px) {
    padding-top: 40px;
  }
}

.not-found__container {
  width: calc(100% - 220px);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}

.not-found__message {
  width: 340px;
  background-color: rgba(#020001, 0.9);
  box-shadow: 0 50px 50px #020001, 50px 0 50px #020001;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 275px;
  }
}

.not-found__message-title {
  font-size: 194px;
  line-height: 194px;
  text-shadow:
    -3px 3px 4px rgba(255, 255, 255, 0.2),
    8px -8px 10px rgba(255, 255, 255, 0.07),
    -45px 45px 70px rgba(0, 0, 0, 0.2),
    -30px 30px 30px rgba(0, 0, 0, 0.2),
    -10px 10px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    font-size: 160px;
  }
}

.not-found__message-subtitle {
  font-size: 37px;
  line-height: 57px;
  margin-top: 15px;
  text-transform: uppercase;
  text-shadow:
    -3px 3px 4px rgba(255, 255, 255, 0.2),
    8px -8px 10px rgba(255, 255, 255, 0.07),
    -45px 45px 70px rgba(0, 0, 0, 0.2),
    -30px 30px 30px rgba(0, 0, 0, 0.2),
    -10px 10px 10px rgba(0, 0, 0, 0.35);

  @media screen and (max-width: 600px) {
    font-size: 30px;
    margin-top: 0;
  }
}

.not-found__message-description {
  font-family: $Montserrat;
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 26px;
  }
}

.not-found__message-button {
  width: 100%;
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
}
</style>
