<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">flex</h1>
    <h2>布局：vuetify的flex布局</h2>
    <br />
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

    <br />
    <hr />
    <h3>1. 在vuetify中使用flex元素</h3>
    <template>
      <h4>d-flex 使用flex</h4>
      <p>class="d-flex pa-2"</p>
      <v-card class="d-flex pa-2">
        首先这一个flex容器，可以是任何元素，这是v-card；class使用 .d-flex 或者
        .d-[xs|sm|md|lg|xl]-flex .d-inline-flex使用内联
        <div class="green pa-1 ma-1" outlined v-for="n in 3" :key="n">
          这里是一个div，是v-card的子元素
        </div>
      </v-card>
    </template>

    <br />
    <hr />
    <h3>2. 定义flex主轴方向</h3>
    <template>
      <h4>flex-row 横轴对齐</h4>
      <p>class="d-flex flex-row ma-2"</p>
      <v-card
        class="d-flex flex-row ma-2"
        :color="$vuetify.theme.dark ? 'purple darken-4' : 'pink'"
      >
        <v-card v-for="n in 5" :key="n" class="ma-2">
          this is {{ n }}!!
        </v-card>
      </v-card>
      <p>class="d-flex flex-column-reverse ma-2"</p>
      <v-card class="d-flex flex-column-reverse ma-2">
        <v-card
          v-for="n in 3"
          :key="n"
          class="ma-2"
          style="height:50px;width:300px;"
        >
          this is {{ n }}!!
        </v-card>
      </v-card>
    </template>

    <br />
    <hr />
    <h3>3. 对齐排版</h3>
    <h4>justify -- 对齐:横轴对齐</h4>
    <span>默认修改x轴</span>
    <template>
      <v-card class="d-flex justify-start ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2">
          justify-start
        </v-card>
      </v-card>
      <v-card class="d-flex justify-end ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2">
          justify-end
        </v-card>
      </v-card>
      <v-card class="d-flex justify-center ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2">
          justify-center
        </v-card>
      </v-card>
      <v-card class="d-flex justify-space-around ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2">
          justify-space-around
        </v-card>
      </v-card>
      <v-card class="d-flex justify-space-between ma-2">
        <v-card v-for="n in 3" :key="n" class="ma-2">
          justify-space-between
        </v-card>
      </v-card>
    </template>

    <template>
      <h4>align -- 对齐:纵轴对齐</h4>
      <span>默认修改y轴项目</span>
      <v-card class="d-flex align-start ma-2" height="100">
        <v-card v-for="n in 3" :key="n" class="ma-2 pa-1 pink lighten-3">
          align-start
        </v-card>
      </v-card>
      <v-card class="d-flex align-end ma-2" height="100">
        <v-card v-for="n in 3" :key="n" class="ma-2 pa-1 pink lighten-3">
          align-end
        </v-card>
      </v-card>
      <v-card class="d-flex align-center ma-2" height="100">
        <v-card v-for="n in 3" :key="n" class="ma-2 pa-1 pink lighten-3">
          align-center
        </v-card>
      </v-card>
      *alignment-baseline 属性指定了一个对象如何相对于它的父元素对齐
      <v-card class="d-flex align-baseline ma-2" height="100">
        <v-card v-for="n in 3" :key="n" class="ma-2 pa-1 pink lighten-3">
          align-baseline
        </v-card>
      </v-card>
      <v-card class="d-flex align-stretch ma-2" height="100">
        <v-card v-for="n in 3" :key="n" class="ma-2 pa-1 pink lighten-3">
          align-stretch
        </v-card>
      </v-card>

      <h4>align-self -- flex对齐</h4>
      <span>flex与自身对齐 class="align-self-baseline"</span>
      <template>
        <v-card class="d-flex" v-for="j in justify" :key="j" height="100">
          align-self-{{ j }}:
          <v-card
            outlined
            class="orange lighten-3 pa-1 ma-1"
            :class="[n === 2 && `align-self-${j}`]"
            v-for="n in 3"
            :key="n"
            >{{ n !== 2 ? "固定对齐元素" : "flex元素" }}</v-card
          >
        </v-card>
      </template>
    </template>
    <template>
      <h4>pa ma pt pd pl pr -- 自动边距</h4>
      <span>修改项目 margin和padding 设置 class="mr-auto"</span>
      <v-card class="d-flex" height="100">
        <v-card
          outlined
          class="orange lighten-3 pa-1 ma-1"
          v-for="n in 3"
          :key="n"
          :class="[n === 1 ? 'mr-auto' : '']"
          >{{ n === 1 ? "设置了mr-auto" : "flex元素" }}</v-card
        >
      </v-card>
      <v-card class="d-flex" height="100">
        <v-card
          outlined
          class="orange lighten-3 pa-1 ma-1"
          v-for="n in 3"
          :key="n"
          :class="[n === 3 ? 'ml-auto' : '']"
          >{{ n === 3 ? "设置了ml-auto" : "flex元素" }}</v-card
        >
      </v-card>
      <v-card class="d-flex flex-column" height="200">
        <span>height="200"</span>
        <v-card
          outlined
          width="200"
          class="pa-1 ma-1"
          v-for="n in 3"
          :key="n"
          :class="[
            n === 3 ? 'mt-auto ml-auto red lighten-2' : 'orange lighten-3 ',
          ]"
          >{{ n === 3 ? "mt-auto ml-auto red lighten-2" : "flex元素" }}</v-card
        >
      </v-card>
    </template>

    <template>
      <h4>wrap -- flex 堆叠</h4>
      <p>修改容器 堆叠方式</p>
      <p>.flex-nowrap 默认不堆叠，文字挤不下会超出</p>
      <v-card class="d-flex flex-nowrap pink accent-1" height="100" width="100">
        <v-card class="pa-1 ma-2 amber darken-1" v-for="n in 5" :key="n"
          >第{{ n }}flex项目个</v-card
        >
      </v-card>
      <p>.flex-wrap 没指定flex容器的高宽，自动换行</p>
      <v-card class="d-flex flex-wrap pink accent-1">
        <v-card class="pa-1 ma-2 amber darken-1" v-for="n in 22" :key="n"
          >第{{ n }}个flex项目</v-card
        >
      </v-card>
      <p>.flex-wrap-reverse</p>
      <v-card class="d-flex flex-wrap-reverse pink accent-1">
        <v-card class="pa-1 ma-2 amber darken-1" v-for="n in 22" :key="n"
          >第{{ n }}个flex项目</v-card
        >
      </v-card>
    </template>

    <template>
      <h4>order -- flex 排序</h4>
      <p>修改项目 class="order-1"</p>
      <v-card class="d-flex flex-wrap teal lighten-4">
        <v-card
          class="pa-1 ma-2 green accent-2"
          v-for="n in 13"
          :key="n"
          :class="n === 2 ? 'order-frist' : `order-${n}`"
        >
          {{ n === 2 ? "我是第二个,我是order-frist,我要跑到第一个去了!" : "" }}
          第{{ n }}个flex项目
          {{
            n === 13
              ? "默认12个order-1 ~ order-12，第13个 order-13 开始好像有问题"
              : ""
          }}
        </v-card>
      </v-card>
    </template>

    <template>
      <h4>align-content -- flex 内容对齐</h4>
      <p>
        修改容器 class="align-content-[start|end|center|between|around|stretch]"
        默认start
      </p>
      <v-card
        class="d-flex flex-wrap align-content-center teal lighten-4"
        height="200"
      >
        <v-card class="pa-1 ma-2 green accent-2" v-for="n in 13" :key="n">
          第{{ n }}个flex项目
        </v-card>
      </v-card>
    </template>

    <template>
      <h4>
        grow,shrink -- Flex 增长系数和收缩系数
      </h4>
      <p>
        通过添加 flex-{condition}-{value} 格式的辅助类来使用. condition 可以是
        grow 或 shrink 两者之一, value可以是 0 或 1 两者之一.
      </p>
      <v-container>
        <v-row class="red lighten-2 d-flex flex-nowrap outlined">
          <v-col class="blue lighten-2 ma-2 flex-grow-0 flex-shrink-0" cols="2"
            >hello col</v-col
          >
          <v-col
            class="blue lighten-2 ma-2 flex-grow-1 flex-shrink-0"
            style="min-width: 100px; max-width: 100%;"
            cols="3"
            >hello col max-width: 100%</v-col
          >
          <v-col class="blue lighten-2 ma-2 flex-grow-0 flex-shrink-1" cols="5"
            >hello col</v-col
          >
        </v-row>
      </v-container>
    </template>

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
        href="https://vuetifyjs.com/zh-Hans/styles/flex/#section-542f7528-flexbox"
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
  data() {
    return {
      justify: ["start", "end", "center", "baseline", "auto", "stretch"],
    };
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
