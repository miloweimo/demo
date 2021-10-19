module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/server": {
        target: "http://192.168.1.56",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
