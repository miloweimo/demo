import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servertime: '',
    auth: {}
  },
  mutations: {
    setAuth(state,code){
      state.auth = code
    },
    setServertime(state, ts) {
      state.servertime = ts;
    },
    addServertime(state, ms) {
      state.servertime = state.servertime + ms;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
