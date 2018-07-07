import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazyload
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    }
  ]
})
