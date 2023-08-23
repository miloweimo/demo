const routes = [
  {
    path: 'comploop',
    name: 'comploop',
    component: () => import(/* webpackChunkName: "comploop" */ '@/modules/comploop/index.vue')
  },
];

export default routes;