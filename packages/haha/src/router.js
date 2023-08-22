import Vue from 'vue'
import Router from 'vue-router'
import Home from './modules/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/modules/test'], resolve)
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    },
  ]
})