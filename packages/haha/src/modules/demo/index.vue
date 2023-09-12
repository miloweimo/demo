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
  computed: {
    ...mapState('demo', ['msg']),
  },
  created() {
    console.log('demo created')
  },

}
</script>

<style>

</style>