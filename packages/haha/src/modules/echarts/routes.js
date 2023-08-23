const routes = [
  {
    path: 'echarts',
    name: 'echarts',
    component: () => import(/* webpackChunkName: "echarts" */ '@/modules/echarts/index.vue')
  },
];

export default routes;