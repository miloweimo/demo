<template>
  <div>
    <h1>demo</h1>
    msg: {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    console.log('demo created')
  },
  computed: {
    ...mapState('demo', ['msg']),
  },

}
</script>

<style>

</style>