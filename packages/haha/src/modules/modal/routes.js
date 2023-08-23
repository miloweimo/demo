const routes = [
  {
    path: 'modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "modal" */ '@/modules/modal/index.vue')
  },
];

export default routes;