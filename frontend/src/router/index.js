import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import( '../views/HomeView.vue')
    }
  },
  {
    path: '/list',
    name: 'memolist',
    component: function () {
      return import( '../views/MemoList.vue')
    }
  },
  {
    path: '/list/:id',
    name: 'pageview',
    component: function () {
      return import( '../views/PageView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
