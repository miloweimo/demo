import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servertime: '',
  },
  mutations: {
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
