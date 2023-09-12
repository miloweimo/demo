<template>
  <div style="border: 1px solid blue;margin: 3px;">
    <button @click="show = true">
      <p>我是B，我也引用了A组件 点击显示A</p>
    </button>
    <A v-if="show" />
  </div>
</template>

<script>
// import A from './A.vue'

export default {
  components: {
    // A,
    // A: () => import('./A.vue')
  },
  data() {
    return {
      show: false
    }
  },
  beforeCreate () {
    this.$options.components.A = () => import('./A.vue')
  },

}
</script>

<style>

</style>