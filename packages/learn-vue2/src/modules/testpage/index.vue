<template>
  <div>
    <h1>Index Page</h1>
    test page
    <ComponentA />
    some change again
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'

export default {
  name: 'TestModuleIndexPage',
  components: {
    ComponentA,
  },
}
</script>

<style>

</style>