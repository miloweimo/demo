<template>
  <div>
    <h1>demo</h1>
    <div>store msg: {{ msg }}</div>
    <div>i18n: {{ this.$t('msg') }}</div>
    <div>i18n demo: {{ this.$t('demo.msg') }}</div>
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