<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">flex</h1>
    <h2>布局：vuetify的flex布局</h2>
    <h3>0. 如何定义flex布局 flex style list</h3>
    <div class="container">
      <v-card>
        a. 首先创建一个flex布局 <br />
        <VueCodeHighlight language="css">
          <pre>
.container {
  /* 1. 首先创建一个flex布局 */
  display: flex;
}
</pre
          >
        </VueCodeHighlight>
      </v-card>
      <v-card>
        b. 选择一个flow direction 默认 row <br />
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
      </v-card>
      <v-card>
        c. 然后定义如何分布剩余空间 <br />
        <img
          src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg"
          alt="align-content 对齐内容"
          style="height: 300px;"
        />
      </v-card>
    </div>
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
    <h3>1. 在vuetify中使用flex元素</h3>

    <template>
      <!-- 这个是template,不用管我 -->
      <v-card class="d-flex pa-2">
        <!-- 首先这一个flex容器，可以是任何元素，这是v-card；class使用 .d-flex 或者
        .d-[xs|sm|md|lg|xl]-flex .d-inline-flex使用内联 -->
        <div class="green pa-1 ma-1" outlined v-for="n in 3" :key="n">
          这里是一个div，是v-card的子元素
        </div>
      </v-card>
    </template>

    <br />
    <hr />
    <h3>2. 定义flex主轴方向</h3>
    <template>
      <v-card
        class="d-flex flex-row ma-2"
        :color="$vuetify.theme.dark ? 'purple darken-4' : 'pink'"
      >
        <v-card
          v-for="n in 5"
          :key="n"
          class="ma-2"
          style="height:50px;width:300px;"
        >
          this is {{ n }}!!
        </v-card>
      </v-card>
      <v-card class="d-flex flex-column-reverse ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2" style="height:50px;width:300px;">
          this is {{ n }}!!
        </v-card>
      </v-card>
    </template>

    <!-- <p>v-container 里面来定义内容居中和水平填充内容</p>
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
    </template> -->

    <h3>参考</h3>
    <p>
      <a
        href="https://vuetifyjs.com/zh-Hans/introduction/why-vuetify/#section-529f80fd63075357"
        >Vuetify 功能指南</a
      >
    </p>
    <p>
      <a
        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-backgrounds"
        >Flexbox 完整指南</a
      >
    </p>
    <p>
      <a
        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-backgrounds"
        >Vuetify 弹性布局</a
      >
    </p>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
  name: "flex",
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
  justify-content: space-around;

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
