<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">Grids</h1>
    <a href="https://vuetifyjs.com/zh-Hans/features/breakpoints/"
      >https://vuetifyjs.com/zh-Hans/features/breakpoints/</a
    ><br />
    <span class="text--subtitle-1 grey--text">网格系统</span>
    <hr />
    flex布局 flex style list <br />
    <div class="container">
      <div>
        1. 首先创建一个flex布局 <br />
        <VueCodeHighlight language="css">
          <pre>
.container {
  /* 1. 首先创建一个flex布局 */
  display: flex;
}
</pre
          >
        </VueCodeHighlight>
      </div>
      <div>
        2. 选择一个flow direction 默认 row <br />
        <VueCodeHighlight language="css">
          <pre>
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
</pre
          >
        </VueCodeHighlight>
        <img
          src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg"
          alt="flex-direction flex方向"
        />
      </div>
      <div>
        3. 然后定义如何分布剩余空间 <br />
        <img
          src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg"
          alt="align-content 对齐内容"
          style="height: 300px;"
        />
      </div>
    </div>
    <br />
    <span>效果：</span>
    <ul class="flex-container">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
      <li class="flex-item">5</li>
      <li class="flex-item">6</li>
    </ul>
    <hr />
    <a href="https://vuetifyjs.com/zh-Hans/components/grids/#v-spacer"
      ><span
        >vuetify 的flex布局
        https://vuetifyjs.com/zh-Hans/components/grids/#v-spacer</span
      ></a
    >

    <p>v-container 里面来定义内容居中和水平填充内容</p>
    <template>
      <v-container class="grey lighten-5">
        <div>
          vdnsjvj 11
        </div>
        <div>
          vdshv d 222
        </div>
        <div>
          vdshv 333
        </div>
      </v-container>
    </template>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
  name: "grids",
  components: {
    VueCodeHighlight,
  },
};
</script>

<style>
.flex-container,
.container {
  /* 1. 首先创建一个flex布局 */
  display: flex;

  /* 2. 选择一个flow direction 默认 row
    flex-direction: row | row-reverse | column | column-reverse;
  */
  flex-direction: row;
  /* 3. 然后定义如何分布剩余空间
    align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
  */
  justify-content: center;

  list-style: none;
}

.flex-item {
  background: tomato;
  width: 100px;
  height: 61.8px;
  margin: 5px;
  line-height: 61.8px;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
