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
    port:3000
  },
};
