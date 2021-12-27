<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">Layout</h1>
    <v-card :height="height">
      这里显示不同设备的自动高度切换效果 当前设备大小为：{{
        $vuetify.breakpoint.name
      }}
      <br />
      *ctrl+滚轮试试
    </v-card>
  </div>
</template>

<script>
export default {
  name: "layout",
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
