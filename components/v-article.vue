<template>
  <article class="v-article">
    <div class="v-article__preview" v-if="preview">
      <img class="v-article__preview-img" :src="preview" alt="article-image">
    </div>
    <div class="v-article__main" :style="{'border-top': preview ? 'none' : null}">
      <span class="v-article__title">{{ title }}</span>
      <span class="v-article__description">{{ description }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    preview: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-article__main {
  display: flex;
  flex-direction: column;
  border: 1px solid $gray6;
  // padding: 20px 20px 30px;
  padding: 15px 20px 20px;

  @media screen and (max-width: 1024px) {
    padding: 15px 10px 10px;
  }
}

.v-article__preview {
  @media screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }

  @media screen and (max-width: 600px) {
    padding-top: 240px;
  }
}

.v-article__preview-img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    object-fit: cover;
  }
}

.v-article__title {
  // font-size: 20px;
  // line-height: 28px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: $gray1;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
}

.v-article__description {
  font-family: $Montserrat;
  // font-size: 14px;
  // line-height: 20px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  // margin-top: 15px;
  margin-top: 10px;
}
</style>
