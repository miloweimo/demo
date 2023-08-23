<template>
  <div>
    <h1>组件循环依赖问题</h1>
    <p>互相依赖的组件都用import会导致组件注册问题</p>
<code>
export default {
  beforeCreate () {
    this.$options.components.A = () => import('./A.vue')
  },
}
</code>
或者
<code>
export default {
  components: {
    A: () => import('./A.vue')
  },
}
</code>
      <A></A>
    <hr class="my-2">
      <B></B>
  </div>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'

export default {
  components: {
    A,
    B,
  },
}
</script>

<style scoped>
</style>