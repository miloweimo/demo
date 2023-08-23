const routes = [
  {
    path: 'test',
    name: 'test',
    component: () => import('@/modules/test/index.vue')
  },
];

export default routes;