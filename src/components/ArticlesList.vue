<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <Article :article="article" />
    </li>
  </ul>
</template>

<script>
import Article from './Article.vue'
export default {
  name: 'ArticlesList',
  data() {
    return {
      articles: [],
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://babiwes.com/larticles_v7/public/api/articles`
        )
        const articles = await res.json()
        this.articles = articles.data
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: {
    Article,
  },
}
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
