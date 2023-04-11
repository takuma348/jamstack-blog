<script setup>
const ctx = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/blogs/${slug}`, {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>

<template>
  <main class="blog-post">
    <h1 class="blog-post__title">{{ article.title }}</h1>
    <p class="blog-post__published-at">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>

    <div class="blog-post__body" v-html="article.content" />
  </main>
</template>

<style lang="scss" scoped>
.blog-post {
  padding-top: 40px;
  margin-inline: auto;
  max-width: 800px;
  width: 100%;

  &__title {
    font-size: 32px;
    margin-bottom: 20px;
  }

  &__published-at {
    font-size: 16px;
    margin-bottom: 20px;
    color: #999999;
  }

  &__body {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 40px;

  }

  &__body img {
    max-width: 100%;
    margin-bottom: 20px;
  }

  &__body p {
    margin-bottom: 20px;
  }

  &__body a {
    color: #2a9df4;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>