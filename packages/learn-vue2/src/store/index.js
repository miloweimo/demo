import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servertime: 0,
  },
  mutations: {
    setServertime(state, ts) {
      state.servertime = ts;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
