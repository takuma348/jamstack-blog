<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/blogs", {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>


<template>
  <div class="blog-list">
    <h1 class="blog-list__title">Blog list</h1>

    <ul class="blog-list__articles">
      <li v-for="article in data.contents" :key="article.id" class="blog-list__article">
        <nuxt-link :to="`/${article.id}`" class="blog-list__link">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.blog-list {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  }

  &__articles {
    list-style: none;
    padding-top: 40px;
    margin-inline: auto;
    max-width: 800px;
    width: 100%;
  }

  &__article {
    border-bottom: 1px solid #e6e6e6;
  }

  &__link {
    color: #333333;
    display: inline-block;
    text-decoration: none;
    font-size: 24px;
    padding: 15px;
    width: 100%;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>