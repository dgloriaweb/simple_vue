<template>
  <div>
    <router-link :to="articlePath">
        Hello
      <p>{{ article.title }}</p>
    </router-link>
  </div>
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

<style lang="scss" scoped></style>
