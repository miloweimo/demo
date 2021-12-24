<template>
  <div id="app">
    <v-app class="grey lighten-3">
      <Navbar />
      <div>
        <router-link to="/foo">Go to Foo</router-link>

        <router-view></router-view>
      </div>
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
