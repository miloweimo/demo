const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/modules/demo')
  },
];

export default routes;