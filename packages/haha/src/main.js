import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from './router'

Vue.config.productionTip = false;
Vue.use(router)
const vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
})
vm.$mount("#app");

