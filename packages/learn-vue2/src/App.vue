<template>
  <div id="app">
    <v-app class="grey lighten-3">
      <Navbar />
      <v-main>
        <!-- <v-container fluid> -->
          <!-- 如果使用 vue-router -->
          <router-view></router-view>
        <!-- </v-container> -->
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Hello from "./components/Hello.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Hello,
  },
};
</script>
