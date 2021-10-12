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
    <span>{{ now.format("YYYY-MM-DD HH:mm:ss") }}</span>
    {{ reload() }}
    <v-spacer></v-spacer>
    <span class="text-h1">{{ "Maintenance" }}</span>
    <v-spacer></v-spacer>
    <img src="../assets/shopworx.png" height="100%" />
  </v-app-bar>
</template>

<script>
import moment from "moment";

export default {
  name: "Header",
  data: function () {
    return { now: moment() };
  },
  methods: {
    reload() {
      setTimeout(() => {
        this.now = moment();
      }, 1000);
    },
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