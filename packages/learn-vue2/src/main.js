import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from './router'
// import loginService from "./services/login";
// import infoService from "./services/info";

Vue.config.productionTip = false;
Vue.use(router)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
