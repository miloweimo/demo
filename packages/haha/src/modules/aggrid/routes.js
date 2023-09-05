const routes = [
  {
    path: 'aggrid',
    name: 'aggrid',
    component: () => import(/* webpackChunkName: "aggrid" */ '@/modules/aggrid/index.vue')
  },
];

export default routes;