<template>
  <div>
    <v-content>
      <h1>habcd</h1>
      <h3>Hello</h3>
      <hr />
      // 文字颜色
      <router-view></router-view>
      <p class="red white--text">
        Lorem ipsum dolor sit amet, inciderint definitionem est ea, explicari
        prodesset eam id. Mazim doctus vix an. Amet causae probatus nec ex.
      </p>
      <p class="amber lighten-2 green--text text--lighten-3">
        Lorem ipsum dolor sit amet, inciderint definitionem est ea, explicari
        prodesset eam id. Mazim doctus vix an. Amet causae probatus nec ex.
      </p>
      <p class="amber lighten-2 green--text text--darken-3">
        Lorem ipsum dolor sit amet, inciderint definitionem est ea, explicari
        prodesset eam id. Mazim doctus vix an. Amet causae probatus nec ex.
      </p>
      <hr />
      // 文字排版
      <h1>deafult h1 Display</h1>
      <br />old:
      <h1 class="display-4">display-4 &lt;= v2.3.0</h1>
      <h1 class="display-3">display-3 &lt;= v2.3.0</h1>
      <h1 class="display-2">display-2 &lt;= v2.3.0</h1>
      <h1 class="display-1">display-1 &lt;= v2.3.0</h1>
      <h1 class="headline">headline &lt;= v2.3.0</h1>
      <h1 class="title">title &lt;= v2.3.0</h1>
      <h1 class="subtitle-1">subtitle-1 &lt;= v2.3.0</h1>
      <h1 class="subtitle-2">subtitle-2 &lt;= v2.3.0</h1>
      <h1 class="body-1">body-1 &lt;= v2.3.0</h1>
      <h1 class="body-2">body-2 &lt;= v2.3.0</h1>
      <h1 class="caption">caption &lt;= v2.3.0</h1>
      <h1 class="overline">overline &lt;= v2.3.0</h1>
      <br />new:
      <h1 class="text-h1">new version</h1>
      <h1 class="text-h2">new version</h1>
      <h1 class="text-h3">new version</h1>
      <h1 class="text-h4">new version</h1>
      <h1 class="text-h5">new version</h1>
      <h1 class="text-h6">new version</h1>
      <h1 class="text-subtitle-1">new version</h1>
      <h1 class="text-subtitle-2">new version</h1>
      <h1 class="text-body-1">new version</h1>
      <h1 class="text-body-2">new version</h1>
      <h1 class="text-button">new version</h1>
      <h1 class="text-caption">new version</h1>
      <h1 class="text-overline">new version</h1>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "Hello",
};
</script>

<style></style>
