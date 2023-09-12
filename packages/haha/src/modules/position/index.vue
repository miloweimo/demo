<template>
  <div>
    <h1>元素位置</h1>
    <div>
      <p>{{ window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth }}</p>
      <p>{{ window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight }}</p>
      <p>视口大小: {{ viewport }} 实时: {{ viewportRealtime }}</p>
    </div>
  </div>
</template>

<script>

let timer = null;

export default {
  data() {
    return {
      window,
      document,
      viewportRealtime: '',
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  mounted() {
    this.viewportRealtime = this.getViewport();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  computed: {
    viewport() {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      const viewport = `${width} x ${height}`;
      return viewport;
    },
  },
  methods: {
    getViewport() {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      const viewport = `${width} x ${height}`;
      return viewport;
    },
    // 防抖
    myDebounce(fn, delay = 0) {
      console.log('防抖函数', fn, delay);
      return ( ...args ) => {

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },

    resizeHandler() {
      this.myDebounce(() => {this.viewportRealtime = this.getViewport()}, 300)();
    },
  },

}
</script>

<style>

</style>