<template>
  <nuxt-link class="item" :to="{ name: 'news' }">
    <img :src="photo" :alt="item.name" class="preview">
    <img :src="photo" :alt="item.name" class="preview">
    <div class="block">
      <h3 class="header">
        {{ item.name }}
      </h3>
      <p class="text">
        {{ item.description }}
      </p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    photo () {
      if (this.item.photo) {
        return `http://localhost:8000/img/news/${this.item.photo}`
      }
      return 'http://localhost:8000/img/news/preview.png'
    }
  }
}
</script>
<style scoped>
.item {
  width: 100%;
  display: block;
}

.header,
.text {
  padding: 0 20px;
}

.preview {
  width: inherit;
}
.preview:not(:first-child) {
  margin-top: 20px;
}
.header {
  margin-top: 22px;
  margin-bottom: 15px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #333333;
}
.text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #4f4f4f;
  margin-bottom: 30px;
}
.block {
  background: #ffffff;
  border: 1px solid #f2f2f2;
}

@media screen and (max-width: 600px) {
  .preview {
    height: 300px;
    object-fit: cover;
  }
  .preview:first-child {
    display: none;
  }
}
</style>
