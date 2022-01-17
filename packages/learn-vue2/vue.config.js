module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/server": {
        target: "http://10.50.11.67",
        ws: true,
        changeOrigin: true,
      },
    },
    port:3000
  },
};
