<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-title class="grey--text">哈哈</v-app-bar-title>
      <v-app-bar-title class="pink--text lighten-2">我的</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon depressed @click="drawer = !drawer">
        <!-- @keyup.ctrl.enter="console.log('anxia')" -->
        <v-icon color="pink">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon depressed>
        <v-icon color="pink">mdi-exit-to-app</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="pink lighten-4">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <span class="grey--text">哈哈</span>
            <span class="pink--text lighten-2">我的</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="handle(item.linkto)"
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
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "About", icon: "mdi-spin mdi-star", linkto: "/about" },
        { title: "Dashboard", icon: "mdi-view-dashboard", linkto: "/" },
        {
          title: "Hello",
          icon: "mdi-human-greeting-variant",
          linkto: "/hello",
        },
        { title: "Font", icon: "mdi-format-font", linkto: "/font" },
        { title: "Layout", icon: "mdi-page-layout-body", linkto: "/layout" },
        { title: "Flex", icon: "mdi-animation", linkto: "/flex" },
        { title: "Grids", icon: "mdi-grid", linkto: "/grids" },
        { title: "Getdata", icon: "mdi-connection", linkto: "/getdata" },
        { title: "Highchart", icon: "mdi-chart-areaspline", linkto: "/highchart" },
      ],
      right: null,
    };
  },
  methods: {
    handle(path) {
      // console.log("new path", path);
      // console.log("old path", this.$router.currentRoute.fullPath);

      if (path === this.$router.currentRoute.fullPath) return;
      this.$router.push({ path: path });
    },
  },
};
</script>

<style></style>
