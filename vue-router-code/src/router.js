import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'

Vue.use(VueRouter)

// 路由管理器
const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/foo',
        component: Foo
      },
    ]
})

export default router