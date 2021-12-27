import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Hello from './components/Hello.vue'
import Font from './components/Font.vue'
import About from './components/About.vue'
import Grids from './components/Grids.vue'
import Flex from './components/Flex.vue'
import Layout from './components/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/font',
      name: 'font',
      component: Font
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/grids',
      name: 'grids',
      component: Grids
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
  ]
})