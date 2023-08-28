const routes = [
  {
    path: 'throttle',
    name: 'throttle',
    component: () => import(/* webpackChunkName: "throttle" */ '@/modules/throttle/index.vue')
  },
];

export default routes;