const routes = [
  {
    path: 'demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '@/modules/demo/index.vue')
  },
];

export default routes;