import Vue from "vue";
import Vuex from "vuex";
import jsonServerService from '../services/jsonServer'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servertime: '',
    auth: {},
    notes: [],
  },
  mutations: {
    SET_AUTH(state, code) {
      state.auth = code
    },
    setServertime(state, ts) {
      state.servertime = ts;
    },
    addServertime(state, ms) {
      state.servertime = state.servertime + ms;
    },
    SET_NOTES(state, notes) {
      state.notes = notes
    },
  },
  actions: {
    async updateAllNotes() {
      console.log('actions:updateAllNotes');
      const notes = await jsonServerService.getAllNotes()
      console.log('notes:',notes);
      
      this.commit('SET_NOTES', notes)
    }

  },
  getters: {},
  modules: {},
});
