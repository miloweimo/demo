const routes = [
  {
    path: 'center',
    name: 'center',
    component: () => import(/* webpackChunkName: "center" */ '@/modules/center/index.vue')
  },
];

export default routes;