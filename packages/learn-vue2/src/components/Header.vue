<template>
  <v-app-bar
    dense
    flat
    app
    height="40"
    width="100%"
    color="#fff"
    class="header"
  >
    <span>{{ moment(servertime).format("YYYY-MM-DD HH:mm:ss") }}</span>
    <v-spacer></v-spacer>
    <span class="text-h1">{{ "Maintenance" }}</span>
    <v-spacer></v-spacer>
    <img src="../assets/shopworx.png" height="100%" />
  </v-app-bar>
</template>

<script>
import moment from "moment";
import store from "../store";
import { mapState, mapMutations, mapActions } from "vuex";
import infoService from "../services/info";
// let servertime;

const initServertime = async () => {
  const servertimeres = await infoService.getServertime();
  store.commit("setServertime", servertimeres.results);
  return;
};
initServertime();
setInterval(() => {
  if (store.state.servertime) {
    store.commit("addServertime", 1000);
  }
}, 1000);

export default {
  name: "Header",
  data: function() {
    return { moment };
  },
  computed: {
    ...mapState({
      servertime: (state) => state.servertime,
    }),
  },
  methods: {
    ...mapMutations(["setServertime"]),
    ...mapActions(["updateServertime"]),
  },
};
</script>

<style>
#header {
  line-height: 2rem;
  font-family: Roboto, sans-serif !important;
  font-size: 1.5rem !important;
  font-weight: 400;
  letter-spacing: normal !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  margin-right: 20px !important;
}
</style>
