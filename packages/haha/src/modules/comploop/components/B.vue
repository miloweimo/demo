<template>
  <div style="border: 1px solid blue;margin: 3px;">
    <button @click="show = true"><p>我是B，我也引用了A组件 点击显示A</p></button>
    <A v-if="show"></A>
  </div>
</template>

<script>
// import A from './A.vue'

export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    // A,
    // A: () => import('./A.vue')
  },
  beforeCreate () {
    this.$options.components.A = () => import('./A.vue')
  },

}
</script>

<style>

</style>