<template>
  <transition name="fade">
    <div class="article-wrapper" :style="styles">
      <div class="article-info">
        <h1>{{ article.title }}</h1>
        <h3>Body: </h3>
        <p>{{ article.body }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    }
  },
  created: function() {
    this.fetchData()
  },
  
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          // https://babiwes.com/larticles_v7/public/api/articles
          `https://babiwes.com/larticles_v7/public/api/articles/${this.$route.params.id}`
        )
        const article = await res.json()
        this.article = article
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.article-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}
.article-info {
  background: #fff;
  color: #222;
  padding: 2rem 10%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
