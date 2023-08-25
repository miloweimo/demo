// 导出模块 路由、状态管理、国际化、侧边导航按钮

export const routerModules = {
  default: require.context('./modules/default', true, /\broutes\b\.js$/),
  demo: require.context('./modules/demo', true, /\broutes\b\.js$/),
  // test: require.context('./modules/test', true, /\broutes\b\.js$/),
  modal: require.context('./modules/modal', true, /\broutes\b\.js$/),
  comploop: require.context('./modules/comploop', true, /\broutes\b\.js$/),
  echarts: require.context('./modules/echarts', true, /\broutes\b\.js$/),
  debounce: require.context('./modules/debounce', true, /\broutes\b\.js$/),
};

// packages/haha/src/components/core/Navbar.vue
export const navModules = [
  { title: "Home", icon: "mdi-home-variant-outline", linkto: "/" },
  // { title: "Demo", icon: "mdi-teddy-bear", linkto: "/demo" },
  // { title: "Test", icon: "mdi-test-tube", linkto: "/test" },
  { title: "Modal 模态弹窗", icon: "mdi-message-badge-outline", linkto: "/modal" },
  { title: "组件循环依赖", icon: "mdi-sync", linkto: "/comploop" },
  { title: "echarts", icon: "mdi-chart-sankey", linkto: "/echarts" },
  { title: "debounce防抖", icon: "mdi-timer-check", linkto: "/debounce" },
];

export const storeModules = {
  store: require.context('./store/modules', true, /[A-Za-z0-9-_,\s]+\.js$/i),
  demo: require.context('./modules/demo/store', true, /[A-Za-z0-9-_,\s]+\.js$/i),
};

export const localeModules = {
  locales: require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
  demo: require.context('./modules/demo/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
};
