<template>
  <div>
    <h1 class="">
      About
    </h1>
    <span
      class="text--subtitle-1 grey--text"
    >测试vuejs、vuetify、highcharts</span>
    <hr>
    <v-container>
      <p class="text-subtitle-2 text-center pink--text">
        Agnostic RTL Alignment
      </p>
      <p class="text-start">
        Left aligned text on ltr and right aligned on rtl.
      </p>
    </v-container>

    <v-btn
      depressed
      elevation="2"
      outlined
      class="primary pa-1 ma-1"
      @click="handleme"
    >
      修改文字阅读方向
    </v-btn>
    <v-btn
      depressed
      elevation="2"
      outlined
      class="primary pa-1 ma-1"
      @click="handleTheme"
    >
      切换暗色主题
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "About",
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
};
</script>

<style></style>
