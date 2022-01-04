<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">Grids</h1>
    <h2 class="text--subtitle-2 black--text">网格系统</h2>

    <template>
      <h3>
        0. 使用css创建grids系统
      </h3>
      <template>
        <h4>a. dispaly 属性</h4>
        <p>
          首先有一个grids container容器 里面都是grids items项目。例如下面的
          <VueCodeHighlight>div</VueCodeHighlight>
          作为容器，有css属性：
        </p>
        <VueCodeHighlight>.grids { display: grid;}</VueCodeHighlight>
        <hr />
        <span>foo</span>
        <div class="grids">
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
        <span>bar</span>

        <VueCodeHighlight>.grids { display: inline-grid;}</VueCodeHighlight>
        <hr />
        <span>foo</span>
        <div class="inline-grids">
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
        <span>bar</span>
      </template>
      <template>
        <h4>b. grid-template-columns</h4>
        <h4>grid-template-rows</h4>
        <p>定义列的基本语法 grid-template-columns: ... ...;</p>
        <VueCodeHighlight
          >style="grid-template-columns:100px 100px 100px
          200px;"</VueCodeHighlight
        >
        <div
          style="grid-template-columns:100px 100px 100px 200px;"
          class="grids"
        >
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
        <h5>
          i.
          repeat()接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值
        </h5>
        <VueCodeHighlight
          >style="grid-template-columns:repeat(4,25%);"</VueCodeHighlight
        >
        <div style="grid-template-columns:repeat(4,25%);" class="grids">
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
        <VueCodeHighlight
          >style="grid-template-columns:repeat(4,1fr);"</VueCodeHighlight
        >
        <p>fr 不会超 ✌</p>
        <div style="grid-template-columns:repeat(4,1fr);" class="grids">
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>

        <h5>
          ii.单元格的大小是固定的，但是容器的大小不确定.
          每列宽度100px，然后自动填充，直到容器不能放置更多的列
        </h5>
        <VueCodeHighlight
          >style="grid-template-columns:repeat(auto-fill,100px);width:400px;"</VueCodeHighlight
        >
        <div
          style="grid-template-columns:repeat(auto-fill,100px);width:400px;"
          class="grids"
        >
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>

        <h5>
          iii. fr 关键字 为了方便表示比例关系，网格布局提供了fr关键字（fraction
          的缩写，意为"片段"）
        </h5>
        <VueCodeHighlight
          >style="grid-template-columns:100px 1.5fr 3fr;width:400px;"</VueCodeHighlight
        >
        <p>第一列的宽度为100像素，第二列的宽度是第三列的一半</p>
        <div
          style="grid-template-columns:100px 1.5fr 3fr;width:400px;"
          class="grids"
        >
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
      </template>
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
.grids {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  outline: #b16e9d solid;
  border-radius: 0.5rem;
}
.inline-grids {
  display: inline-grid;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  outline: #b16e9d solid;
  border-radius: 0.5rem;
}

.items {
  background: #ede7f6;
  padding: 0.5rem;
  border-radius: 1rem;
  text-align: center;
}
</style>
