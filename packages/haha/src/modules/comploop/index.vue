<template>
  <div>
    <h1>组件循环依赖问题</h1>
    <p>互相依赖的组件都用import会导致组件注册问题，是webpack读取顺序问题</p>
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
  </div>
</template>

<script>
import Ajs from'./A.js' // 1. webpack 去加载A.js
import A from './components/A.vue'

console.log(Ajs); // 8. A.js 执行完毕
export default {
  components: {
    A,
  },
}
</script>

<style scoped>
</style>