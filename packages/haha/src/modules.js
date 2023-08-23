// 导出模块 路由、状态管理、国际化、侧边导航按钮

export const routerModules = {
  default: require.context('./modules/default', true, /\broutes\b\.js$/),
  demo: require.context('./modules/demo', true, /\broutes\b\.js$/),
  test: require.context('./modules/test', true, /\broutes\b\.js$/),
  modal: require.context('./modules/modal', true, /\broutes\b\.js$/),
};

export const storeModules = {
  store: require.context('./store/modules', true, /[A-Za-z0-9-_,\s]+\.js$/i),
  demo: require.context('./modules/demo/store', true, /[A-Za-z0-9-_,\s]+\.js$/i),
  // test: require.context('./modules/test/store', true, /[A-Za-z0-9-_,\s]+\.js$/i),
  // modal: require.context('./modules/modal/store', true, /[A-Za-z0-9-_,\s]+\.js$/i),
};

export const localeModules = {
  locales: require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
  demo: require.context('./modules/demo/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
  // test: require.context('./modules/test/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
  // modal: require.context('./modules/modal/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i),
};

export const navModules = [
  { title: "Home", icon: "mdi-home-variant-outline", linkto: "/" },
  { title: "Demo", icon: "mdi-teddy-bear", linkto: "/demo" },
  { title: "Test", icon: "mdi-test-tube", linkto: "/test" },
  { title: "Modal 模态弹窗", icon: "mdi-message-badge-outline", linkto: "/modal" },
];
