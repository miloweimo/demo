<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">About</h1>
    <v-container>
      <p class="text-subtitle-2 text-center">
        Agnostic RTL Alignment
      </p>
      <p class="text-start">
        Left aligned text on ltr and right aligned on rtl.
      </p>
    </v-container>
    <v-btn depressed elevation="2" outlined class="primary" @click="handleme"
      >clickme 修改rtl文字阅读方向</v-btn
    >
    <v-btn depressed elevation="2" outlined class="primary" @click="handleTheme"
      >clickme 切换暗色主题</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    handleme() {
      console.log(this.$vuetify, "翻转文字方向");
      this.$vuetify.rtl = !this.$vuetify.rtl;
    },
    handleTheme(){
      console.log("切换暗色/亮色");
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
      
    }
  },
};
</script>

<style></style>
