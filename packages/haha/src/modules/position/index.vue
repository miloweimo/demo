<template>
  <div style="position: relative;border: 1px solid;" :style="`height: ${height - 80}px;`" @mousemove="handleDragBox" @mouseup="isSelectBox = false">
    <h1>元素位置</h1>
    <p>{{ window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth }}
    {{ window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight }}
    视口大小: {{ viewport }} 实时: {{ viewportRealtime }}</p>
    <v-btn @click="resetBox" class="mb-2">回到原位</v-btn>
    <div ref="box" class="box" @mousedown="isSelectBox = true">
      {{ boxx }} {{ boxy }}
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
      height: 0,
      width: 0,
      viewportRealtime: '',
      isSelectBox: false,
      boxx: 0,
      boxy: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  mounted() {
    this.viewportRealtime = this.getViewport();
    this.getBoxPosition();
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
      this.width = document.body.clientWidth;
      this.height = document.body.clientHeight;
      const viewport = `${this.width} x ${this.height}`;
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
    // 获取box 元素位置 boxx boxy offsetLeft offsetTop
    getBoxPosition() {
      this.boxx = this.$refs.box.offsetLeft;
      this.boxy = this.$refs.box.offsetTop;
    },
    handleDragBox(e) {
      if(this.isSelectBox) {
        console.log(e.movementX, e.movementY);
        const boxElement = this.$refs.box;
        this.boxx = this.$refs.box.offsetLeft;
        this.boxy = this.$refs.box.offsetTop;
        boxElement.style.left = `${this.boxx + e.movementX}px`;
        boxElement.style.top = `${this.boxy + e.movementY}px`;
      }
    },
    resetBox() {
      // 删除left top
      this.$refs.box.style.left = '';
      this.$refs.box.style.top = '';
      this.getBoxPosition();
      this.isSelectBox = false;
    }
  },

}
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: rgba(239, 178, 64, 0.869);
  /* 抓手 */
  cursor: grab;
  position: absolute;
}
/* 按下抓住 */
.box:active {
  cursor: grabbing;
}
</style>