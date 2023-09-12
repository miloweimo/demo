const routes = [
  {
    path: 'template',
    name: 'template',
    component: () => import(/* webpackChunkName: "template" */ '@/modules/template/index.vue')
  },
];

export default routes;