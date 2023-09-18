<template>
  <v-app>
    <Navbar />
    <v-main class="mx-4 my-1">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/core/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
