<template>
  <router-link :to="articlePath">
    <p>Hello {{ article.title }}</p>
  </router-link>
</template>

<script>
export default {
  props: ['article'],
  computed: {
    articlePath: function() {
      return `/article/${this.article.id}`
    },
  },
}
</script>

<style  scoped>
img {
  box-shadow: 0 0 35px #111;
}</style>
