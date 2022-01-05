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
          >style="grid-template-columns:100px 1.5fr
          3fr;width:400px;"</VueCodeHighlight
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

        <h5>
          iv. minmax()
          函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
        </h5>
        <VueCodeHighlight
          >style="grid-template-columns:1fr 1fr
          minmax(100px,1fr);width:500px;"</VueCodeHighlight
        >
        <div
          style="grid-template-columns:1fr 1fr minmax(100px,1fr);width:500px;"
          class="grids"
        >
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>

        <h5>v. auto关键字表示由浏览器自己决定长度</h5>
        <VueCodeHighlight
          >style="grid-template-columns:100px auto 100px;"</VueCodeHighlight
        >
        <div style="grid-template-columns:100px auto 100px;" class="grids">
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>

        <h5>vi. 网格线的名称</h5>
        <p>
          grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
        </p>
        <VueCodeHighlight
          >style="grid-template-columns:[chuizhiwanggexian1] 100px
          [chuizhiwanggexian2] auto [chuizhiwanggexian3] 100px
          [chuizhiwanggexian4];"</VueCodeHighlight
        >
        <div
          style="grid-template-columns:[chuizhiwanggexian1] 100px [chuizhiwanggexian2] auto [chuizhiwanggexian3] 100px [chuizhiwanggexian4];"
          class="grids"
        >
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
          <div class="items">grids item</div>
        </div>
      </template>

      <template>
        <h4>c. row-gap</h4>
        <h4>column-gap</h4>
        <h4>gap</h4>

        <VueCodeHighlight
          >style="row-gap:20px;column-gap:20px;"</VueCodeHighlight
        >
        <p>设置行距 列距</p>
        <div
          style="row-gap:20px;column-gap:20px;grid-template-columns:100px 100px 100px;"
          class="grid"
        >
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
        </div>

        <VueCodeHighlight>style="gap:20px;"</VueCodeHighlight>
        <p>简写</p>
        <div
          style="gap:20px;grid-template-columns:100px 100px 100px;"
          class="grid"
        >
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
          <div class="my-item">grids item</div>
        </div>
      </template>

      <template>
        <h4>d. grid-template-areas 属性</h4>
        <VueCodeHighlight>
          <pre>
          style="display: grid;
          grid-template-columns:100px 100px 100px;
          grid-template-rows:100px 100px 100px;
          grid-template-areas:'a b c'
                              'd e f'
                              'g h i';"</pre
          ></VueCodeHighlight
        >
        <p>
          先划分出9个单元格，然后将其定名为a到i的九个区域，分别对应这九个单元格
        </p>
        <VueCodeHighlight>
          <pre>
          style="display: grid;
          grid-template-columns:100px 100px 100px;
          grid-template-rows:100px 100px 100px;
          grid-template-areas:'a a a'
                              'b b b'
                              'c c .';"</pre
          ></VueCodeHighlight
        >
        <p>将9个单元格分成a、b、c三个区域</p>
        <p>如果某些区域不需要利用，则使用"点"（.）表示。</p>
        <p>
          注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。
        </p>
        <p>
          比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。
        </p>
      </template>

      <template>
        <h4>e. grid-auto-flow 属性</h4>
        <p>grid-auto-flow: {row|column|row dense|column dense};</p>
        <VueCodeHighlight
          ><pre>
#container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row;
}</pre
          ></VueCodeHighlight
        >

        <div id="container">
          <div class="item item-1">
            1
          </div>
          <div class="item item-2">
            2
          </div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
        </div>
        <p>1 2：</p>
        <VueCodeHighlight
          >style="grid-column-start: 1; grid-column-end: 3;"</VueCodeHighlight
        >
        <div id="container">
          <div
            class="item item-1"
            style="grid-column-start: 1; grid-column-end: 3;"
          >
            1
          </div>
          <div
            class="item item-2"
            style="grid-column-start: 1; grid-column-end: 3;"
          >
            2
          </div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
        </div>

        <VueCodeHighlight
          ><pre>
#container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
}</pre
          ></VueCodeHighlight
        >

        <div id="container" style="grid-auto-flow: column;">
          <div class="item item-1">
            1
          </div>
          <div class="item item-2">
            2
          </div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
        </div>
        <p>1 2：</p>
        <VueCodeHighlight
          >style="grid-column-start: 1; grid-column-end: 3;"</VueCodeHighlight
        >
        <div id="container" style="grid-auto-flow: column;">
          <div
            class="item item-1"
            style="grid-column-start: 1; grid-column-end: 3;"
          >
            1
          </div>
          <div
            class="item item-2"
            style="grid-column-start: 1; grid-column-end: 3;"
          >
            2
          </div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
        </div>
        <p>上图会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。</p>
      </template>
    </template>

    <h3>参考</h3>
    <p>
      <a
        href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"
        >CSS Grid 网格布局教程</a
      >
    </p>
    <p>
      <a
        href="https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties"
        >A Complete Guide to Grid</a
      >
    </p>
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
  text-align: center;
}

.my-item {
  outline: #f38911 solid;
  border-radius: 0.5rem;
}

.grid {
  display: grid;
  outline: #5bc703 solid;
  border-radius: 0.5rem;
  width: 360px;
  padding: 0.5rem;
}

#container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row;
}

.item {
  /* border: 1px solid #e5e4e9; */
  outline: #f5e7f1 solid 2px;
  text-align: center;
  font-size: 4rem;
}

.item-1 {
  background-color: #ef342a;
  /* grid-column-start: 1; */
  /* grid-column-end: 3;   */
}

.item-2 {
  background-color: #f68f26;
  /* grid-column-start: 1; */
  /* grid-column-end: 3;  */
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>
