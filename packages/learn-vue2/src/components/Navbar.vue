<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon depressed @click="drawer = !drawer">
        <v-icon color="pink">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="grey--text">哈哈</v-app-bar-title>
      <v-app-bar-title class="pink--text">我的</v-app-bar-title>
      <v-app-bar-title class="font-weight-light grey--text text-uppercase"
        >app</v-app-bar-title
      >
      <v-spacer></v-spacer>

      <v-btn depressed>
        <v-icon color="pink">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style></style>
