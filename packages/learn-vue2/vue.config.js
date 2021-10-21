module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/server": {
        target: "http://192.168.56.102",
        ws: true,
        changeOrigin: true,
      },
    },
    target: 'node',
    port:3000
  },
};
