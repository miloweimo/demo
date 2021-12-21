<template>
  <div class="home">
    <h1>Home page</h1>
    <v-btn depressed class="">Click me!</v-btn>
    <v-btn color="pink">Click me!</v-btn>
    <v-btn class="pink white--text">Click me!</v-btn>
    <v-btn text color="pink">Click me!</v-btn>
    <v-btn depressed text>haha</v-btn>
    <v-btn class="pink white--text">
      <v-icon left>mdi-wechat</v-icon>
      <span>haah</span>
    </v-btn>

    <v-btn class="pink white--text" small>
      <v-icon left>mdi-wechat</v-icon>
      <span>haah</span>
    </v-btn>

    <v-btn depressed dark large color="purple" elevation="2" icon>
      <v-icon>mdi-cards-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
