const routes = [
  {
    path: '',
    name: 'default',
    component: () => import(/* webpackChunkName: "default" */ '@/modules/default/index.vue')
  },
];

export default routes;