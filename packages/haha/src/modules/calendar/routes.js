const routes = [
  {
    path: 'calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '@/modules/calendar/index.vue')
  },
];

export default routes;