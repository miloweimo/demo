const routes = [
  {
    path: 'position',
    name: 'position',
    component: () => import(/* webpackChunkName: "position" */ '@/modules/position/index.vue')
  },
];

export default routes;