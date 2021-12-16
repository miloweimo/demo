<template>
  <div id="app">
    <v-app>
      <!-- <Header /> -->
      <!-- <Main /> -->
      <hr />
      <Hello />
    </v-app>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
// import Main from "./components/Main.vue";
import Hello from "./components/Hello.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    // Main,
    // Header,
    Hello,
  },
  methods: {
    ...mapMutations(["setServertime"]),
  },
  computed: {},
  mounted() {
    // console.log("App mounted,this:", this);
  },
};
</script>

<style></style>
