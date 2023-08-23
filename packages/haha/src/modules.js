// 导出模块 路由、状态管理

export const routerModules = {
  default: require.context('./modules/default', true, /\broutes\b\.js$/),
  demo: require.context('./modules/demo', true, /\broutes\b\.js$/),
  test: require.context('./modules/test', true, /\broutes\b\.js$/),
};
