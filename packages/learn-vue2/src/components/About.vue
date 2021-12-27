<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">About</h1>
    <h2>测试vuejs+vuetify</h2>
    <v-container>
      <p class="text-subtitle-2 text-center pink--text">
        Agnostic RTL Alignment
      </p>
      <p class="text-start">
        Left aligned text on ltr and right aligned on rtl.
      </p>
    </v-container>

    <v-btn depressed elevation="2" outlined class="primary" @click="handleme"
      >修改文字阅读方向</v-btn
    >
    <v-btn depressed elevation="2" outlined class="primary" @click="handleTheme"
      >切换暗色主题</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    handleme() {
      console.log(this.$vuetify, "翻转文字方向");
      ``;
      this.$vuetify.rtl = !this.$vuetify.rtl;
    },
    handleTheme() {
      console.log("切换暗色/亮色");
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
    },
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 200;
        case "md":
          return 300;
        case "lg":
          return 400;
        case "xl":
          return 500;
        default:
          return 300;
      }
    },
  },
};
</script>

<style></style>
