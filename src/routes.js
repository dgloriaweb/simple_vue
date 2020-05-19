import Vue from 'vue'
import Router from 'vue-router'
import ArticlesList from '@/components/ArticlesList'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Articles List',
      component: ArticlesList,
    },
    {
      path: '/article/:id',
      name: 'Articles Detail',
      component: ArticleDetail,
    },
  ],
})
