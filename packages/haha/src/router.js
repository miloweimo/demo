import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/HomeView.vue'
import { routerModules } from '@/modules';

console.log(routerModules);

// 所有包含children的路由加hasChildren属性，所有子路由加rootRouterName属性
const formatChildrenRouters = (item, rootname) => {
  if (item.children && item.children.length > 0) {
    item.meta = {
      ...item.meta,
      hasChildren: true,
    };
    item.children.map((it) => {
      it.meta = {
        ...it.meta,
        rootRouterName: rootname,
      };
      return formatChildrenRouters(it, rootname);
    });
  }
  return item;
};

const loadRouterMessages = () => {
  let messages = [];
  const modulesKeys = Object.keys(routerModules);
  if (modulesKeys.length > 0) {
    for (let i = 0; i < modulesKeys.length; i += 1) {
      const matched = routerModules[modulesKeys[i]].keys();
      messages = [...messages, ...routerModules[modulesKeys[i]](matched[0]).default];
    }
  }
  const routrMessages = messages.map((item) => {
    const rootname = item.name;
    const obj = {
      ...item,
    };
    const newItem = formatChildrenRouters(obj, rootname);
    return newItem;
  });
  return routrMessages;
};
console.log(loadRouterMessages());

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      component: () => import('@/views/HomeView.vue'),
      // component: () => import('@/modules/demo/index.vue'),
      children: loadRouterMessages(),
      // children: [
        // {
        //   path: '',
        //   name: 'Home',
        //   component: () => import('@/views/HomeView.vue')
        // },
      //   {
      //     path: 'demo',
      //     name: 'demo',
      //     component: () => import('@/modules/demo/index.vue')
      //   },
      // ],
      meta: {
        nomultipage: true,
      },
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: resolve => require(['@/modules/test'], resolve)
    // },
    {
      path: '*',
      // redirect: '/', // 立即重定向
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    },
  ]
})