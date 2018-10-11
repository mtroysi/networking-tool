import VueRouter from 'vue-router'

import Home from './Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  }
]

export default new VueRouter({
  routes
})
