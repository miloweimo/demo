const routes = [
  {
    path: 'dayjs',
    name: 'dayjs',
    component: () => import(/* webpackChunkName: "dayjs" */ '@/modules/dayjs/index.vue')
  },
];

export default routes;