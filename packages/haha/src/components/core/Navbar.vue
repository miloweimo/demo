<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon depressed @click="drawer = !drawer">
        <v-icon color="pink">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="grey--text">哈哈</v-app-bar-title>
      <v-app-bar-title class="pink--text lighten-2">我的</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon depressed href="https://github.com/miloweimo">
        <v-icon color="pink">mdi-github</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon depressed href="https://miloweimo.github.io/">
        <v-icon color="pink">mdi-home</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dense class="pink lighten-4">

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 d-flex align-center">
            <span class="grey--text">哈哈</span>
            <span class="pink--text lighten-2">我的</span>
            <v-icon color="pink">mdi-spin mdi-star</v-icon> 
            <v-spacer></v-spacer>
            <v-btn dense icon @click="drawer = !drawer">
              <v-icon color="pink">mdi-menu</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-divider></v-divider> -->

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="handle(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { navModules } from "@/modules";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-variant-outline", linkto: "/" },
      ],
      right: null,
    };
  },
  created() {
    this.items = navModules;
  },
  methods: {
    handle(item) {
      const { path, href } = item;
      if (href) {
        // window.open(href);
        // 页内跳转
        window.location.href = href;
        return;
      }
      if (path === this.$router.currentRoute.fullPath) return;
      this.$router.push({ path: path });
    },
  },
};
</script>

<style></style>
