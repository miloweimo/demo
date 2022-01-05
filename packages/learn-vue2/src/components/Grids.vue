<template>
  <div>
    <h1 class="text--subtitle-1 grey--text">Grids</h1>
    <h2 class="text--subtitle-2 black--text">网格系统</h2>

    <template>
      <h3>
        0. 概述
      </h3>
      <p>
        Flex
        布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid
        布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid
        布局远比 Flex 布局强大。
      </p>
      <h3>1. 基本概念</h3>
      <p>
        参考 重要术语
        <a
          href="https://css-tricks.com/snippets/css/complete-guide-grid/#important-terminology"
          >https://css-tricks.com/snippets/css/complete-guide-grid/#important-terminology</a
        >
      </p>
      <p>
        grid 基本概念
        <a
          href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"
          >https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html</a
        >
      </p>

      <h3>2. 容器属性</h3>
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
        <p>
          上图会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。
        </p>
      </template>

      <template>
        <h4>f. justify-items 属性， align-items 属性， place-items 属性</h4>
        <p>
          justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。
        </p>
        <p>.container {</p>
        <p>justify-items: start | end | center | stretch;</p>
        <p>align-items: start | end | center | stretch;</p>
        <p>}</p>
        <hr />
        <p>justify-items: start;</p>
        <img
          src="https://www.wangbase.com/blogimg/asset/201903/bg2019032516.png"
          alt=" justify-items: start;"
        />
        <hr />
        <p>
          place-items属性是align-items属性和justify-items属性的合并简写形式。
        </p>
        <p>place-items: align-items justify-items;</p>
      </template>

      <template>
        <h4>
          g. justify-content 属性， align-content 属性， place-content 属性
        </h4>
        <p>
          justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。
        </p>
        <p>
          justify-content: start | end | center | stretch | space-around |
          space-between | space-evenly;
        </p>
        <p>
          align-content: start | end | center | stretch | space-around |
          space-between | space-evenly;
        </p>
        <hr />
        <VueCodeHighlight>style="justify-content: center;"</VueCodeHighlight>
        <div id="container" style="justify-content: center;">
          <div class="item item-1">1</div>
          <div class="item item-2">2</div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
        </div>
        <hr />
        <p>
          place-content属性是align-content属性和justify-content属性的合并简写形式。
        </p>
        <p>place-content: align-content justify-content</p>
      </template>

      <template>
        <h4>
          h. grid-auto-columns 属性， grid-auto-rows 属性
        </h4>
        <p>
          在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。
        </p>
        <p>
          grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高
        </p>
        <p>它们的写法与grid-template-columns和grid-template-rows完全相同。</p>
        <hr />
        <p>style="grid-auto-rows:50px"</p>
        <div id="container" style="grid-auto-rows:50px">
          <div class="item item-1">1</div>
          <div class="item item-2">2</div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div
            class="item item-8"
            style="grid-row-start:4; grid-column-start:2;"
          >
            8
          </div>
          <div
            class="item item-9"
            style="grid-row-start:5; grid-column-start:3;"
          >
            9
          </div>
        </div>
        <hr />
      </template>

      <template>
        <h4>
          i. grid-template 属性， grid 属性
        </h4>
        <p>
          grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。
        </p>
        <p>
          grid属性是grid-template-rows、grid-template-columns、grid-template-areas、
          grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式
        </p>
      </template>

      <template>
        <h3>3. 项目属性</h3>
        <template>
          <h4>
            grid-column-start 属性， grid-column-end 属性， grid-row-start
            属性， grid-row-end 属性
          </h4>
          <p>
            项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。
          </p>
          <hr />
          <VueCodeHighlight>
            .item-1 { grid-column-start: 2; grid-column-end: 4;} .item-5 {
            grid-column-start: 2; grid-column-end: 4;}
          </VueCodeHighlight>
          <div id="container">
            <div
              class="item item-1"
              style="grid-column-start:2;grid-column-end:4;"
            >
              1
            </div>
            <div class="item item-2">2</div>
            <div class="item item-3">3</div>
            <div class="item item-4">4</div>
            <div
              class="item item-5"
              style="grid-column-start:2;grid-column-end:4;"
            >
              5
            </div>
            <div class="item item-6">6</div>
            <div class="item item-7">7</div>
            <div class="item item-8">8</div>
            <div class="item item-9">9</div>
          </div>
          <hr />
          <p>
            其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的grid-auto-flow属性决定
          </p>
          <p>
            这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。
          </p>
          <hr />
          <p>测试</p>
          <div id="container">
            <div
              class="item item-1"
              style="grid-column-start:2;grid-column-end:4;grid-row-start:2;grid-row-end:4;"
            >
              1
            </div>
            <div class="item item-2">2</div>
            <div class="item item-3">3</div>
            <div class="item item-4">4</div>
            <div class="item item-5">
              5
            </div>
            <div class="item item-6">6</div>
            <div class="item item-7">7</div>
            <div class="item item-8">8</div>
            <div class="item item-9">9</div>
          </div>
          <hr />
        </template>

        <template>
          <h4>
            grid-column 属性， grid-row 属性
          </h4>
          <p>
            grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。
          </p>
          <p>
            grid-column: 1 / 3; ==> grid-column-start: 1; grid-column-end: 3;
          </p>
        </template>

        <template
          ><h4>grid-area 属性</h4>
          <p>grid-area属性指定项目放在哪一个区域。</p>
          <p>grid-area: e;</p>
          <p>
            grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。
          </p>
          <p>grid-area: 1 / 1 / 3 / 3;</p>
        </template>

        <template>
          <h4>
            justify-self 属性， align-self 属性， place-self 属性
          </h4>
          <p>
            justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
          </p>
          <p>
            align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。
          </p>
          <p>
            place-self属性是align-self属性和justify-self属性的合并简写形式。
          </p>
          <p>place-self: align-self justify-self;</p>
        </template>
      </template>
    </template>

    <h3>4. 参考</h3>
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
