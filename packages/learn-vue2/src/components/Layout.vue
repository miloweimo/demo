<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">Layout</h1>
    <h2>布局：响应式显示</h2>
    <hr />
    <h3>断点服务 是访问组件内的视图信息的一个编程方法。</h3>
    <v-card :height="height">
      这里显示不同设备的自动高度切换效果 当前设备大小为：
      {{ $vuetify.breakpoint.name }}
      <br />
      *ctrl+滚轮/+-试试
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
          return 500;
        case "sm":
          return 100;
        case "md":
          return 150;
        case "lg":
          return 200;
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
