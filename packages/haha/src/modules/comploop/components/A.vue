<template>
  <div style="border: 1px solid red;margin: 3px;">
    <button @click="showB = true"><p>我是A 用了一个B组件点击显示B👇</p></button>
    <B v-if="showB"></B>
  </div>
</template>

<script>
import B from './B.vue'

export default {
  data() {
    return {
      showB: false
    }
  },
  components: {
    B
  },
}
</script>

<style>

</style>