import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from './plugins/i18n'
import store from "./store";
import router from './router'

Vue.config.productionTip = false;
Vue.use(router)
const vm = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
})
vm.$mount("#app");

