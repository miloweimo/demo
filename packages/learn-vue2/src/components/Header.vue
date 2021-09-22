<template>
  <v-app-bar dense flat app height="40" width="100%" color="#fff">
    <span>{{ moment().format('YYYY-MM-DD HH:mm:ss') }}</span>
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
    return { moment };
  },
};
</script>

<style>

</style>