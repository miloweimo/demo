<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Main,
    Header,
  },
  methods: {
    ...mapMutations(["setServertime"]),
  },
  computed: {},
};
</script>

<style></style>
