const routes = [
  {
    path: 'debounce',
    name: 'debounce',
    component: () => import(/* webpackChunkName: "debounce" */ '@/modules/debounce/index.vue')
  },
];

export default routes;