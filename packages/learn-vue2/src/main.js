import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import loginService from "./services/login";
import infoService from "./services/info";
import moment from "moment";
import { mapState, mapMutations, mapActions } from "vuex";


const handleLogin = async () => {
  try {
    const identifier = process.env.VUE_APP_IDENTIFIER;
    const password = process.env.VUE_APP_PASSWORD;
    const sessionInfo = await loginService.login({ identifier, password });

    /**
     * !!! token store in localStorage !!!
     */
    window.localStorage.setItem(
      "sessionId",
      JSON.stringify(sessionInfo.sessionId)
    );

    console.log("login successed", "sessionInfo:", sessionInfo);
    infoService.setSessionInfo(sessionInfo);
  } catch (exception) {
    console.log("login failed:", exception);
  }
};

handleLogin();

// const initServertime = async () => {
//   const servertimeres = await infoService.getServertime();
//   store.commit("setServertime", servertimeres.results);
//   return;
// };
// initServertime();
// setInterval(() => {
//   if (store.state.servertime) {
//     store.commit("addServertime", 1000);
//   }
// }, 1000);

// export default {
//   name: "",
//   data: function() {
//     return { moment };
//   },
//   computed: {
//     ...mapState({
//       servertime: (state) => state.servertime,
//     }),
//   },
//   methods: {
//     ...mapMutations(["setServertime"]),
//     ...mapActions(["updateServertime"]),
//   },
// };

Vue.config.productionTip = false;
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
