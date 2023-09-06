<template>
  <div>
    <h1>Demo</h1>
    <a 
      v-for="item,key in navModules"
      :key="key"
      class="mr-2"
      :href="`${item.href || '#'+item.linkto}`"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script>
import {navModules} from "@/modules";

export default {
  data() {
    return {
      navModules
    }
  }
}
</script>

<style>

</style>