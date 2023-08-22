<template>
  <div>
    <h1>404</h1>
    <span>will go back in {{ counter }} second{{ counter > 1 ? 's' : '' }}</span>
  </div>
</template>

<script>
let timer = null
export default {
  data () {
    return {
      counter: 3
    }
  },
  mounted () {
    timer = setInterval(() => {
      this.counter--
      if (this.counter === 0) {
        this.$router.push('/')
      }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(timer)
  }
}
</script>

<style>

</style>