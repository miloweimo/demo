<template>
  <div id="app">
    <v-app class="grey lighten-3">
      <Navbar />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
