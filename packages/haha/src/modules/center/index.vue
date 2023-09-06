<template>
  <div>
    <h1 style="text-align: center;">
      居中
    </h1>
    <h2 style="margin: 0 auto;width: fit-content;">
      水平居中
    </h2>
    <h3>inline元素</h3>
    块级父元素中水平居中内联子元素 inline、inline-block、inline-table、inline-flex、inline-grid，<code>text-align: center;</code>
    <div
      class="father"
      style="text-align: center;"
    >
      <span class="son"><code>text-align: center;</code></span>
    </div>

    <h3>块元素</h3>
    块级父元素中水平居中块级子元素 block、table、flex、grid，<code>margin: 0 auto;</code>，块级元素需要设置宽度
    <div class="father">
      <div
        class="son"
        style="margin: 0 auto;width: fit-content;"
      >
        <code>margin: 0 auto;width: fit-content;</code>
      </div>
    </div>

    <h3>多行块级元素</h3>
    不止一个块级子元素，父元素<code>text-align: center;</code>，子元素<code>display: inline-block;</code>
    <div
      class="father"
      style="text-align: center;"
    >
      <div
        class="son"
        style="display: inline-block;"
      >
        第01个<code>display: inline-block;</code>
      </div>
      <div
        class="son"
        style="display: inline-block;"
      >
        第02个<code>display: inline-block;</code>
      </div>
      <div
        class="son"
        style="display: inline-block;"
      >
        第03个<code>display: inline-block;</code>
      </div>
    </div>

    不止一个块级子元素，父元素<code>display: flex;justify-content: center;</code>
    <div
      class="father"
      style="display: flex;justify-content: center;"
    >
      <div class="son">
        第01个 默认<code>display: block;</code>
      </div>
      <div class="son">
        第02个 默认<code>display: block;</code>
      </div>
      <div class="son">
        第03个 默认<code>display: block;</code>
      </div>
    </div>

    PS：叠在一起，父元素<code>text-align: center;</code>，子元素<code>display: block;</code>
    <div
      class="father"
      style="text-align: center;"
    >
      <div
        class="son"
        style="display: block;"
      >
        第01个 默认<code>display: block;</code>
      </div>
      <div
        class="son"
        style="display: block;"
      >
        第02个 默认<code>display: block;</code>
      </div>
      <div
        class="son"
        style="display: block;"
      >
        第03个 默认<code>display: block;</code>
      </div>
    </div>

    <h2>垂直居中</h2>
    <h3>单行inline元素</h3>
    父元素上方和下方的填充padding相等<code>padding-top: 20px;padding-bottom: 20px;</code>
    <div
      class="father"
      style="padding-top: 40px;padding-bottom: 40px;"
    >
      <span class="son">第01个 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <a class="son">第02个 Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
      <div
        class="son"
        style="display: inline;"
      >
        第03个 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>

    将不会换行的文本居中，那么有一个技巧就是使文本的line-height高度等于高度 父元素：<code>height: 100px;line-height: 100px;white-space: nowrap;</code>
    <div
      class="father"
      style="height: 100px;line-height: 100px;white-space: nowrap;"
    >
      <span class="son">
        <span>第01个 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <span>第02个 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <span>第03个 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </span>
    </div>

    <h3>多行inline元素</h3>
    如果是多行文本，那么就需要使用父元素 <code>display: table-cell;</code> 和子元素 <code>vertical-align: middle;</code>（默认）来实现
    <div
      style="
          display: table;
          height: 100px;
          /* width: 240px; */
          "
      class="father"
    >
      <p
        style="
          display: table-cell;
          vertical-align: middle;
          "
        class="son"
      >
        这是一段可能会换行的多行文本，放在CSS创建的表格布局里 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt recusandae
        eos, ipsa at nesciunt iusto quos sequi molestiae qui ratione error pariatur minima reiciendis? Suscipit
        necessitatibus officia ratione quibusdam.
      </p>
    </div>

    <table>
      <tr class="father">
        <td
          class="son"
          style="padding: 20px 0;"
        >
          这是一段可能会换行的多行文本，放在真实的table的tr的td里，默认就是 <code>vertical-align: middle;</code> 添加了 <code>padding: 20px 0;</code>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt recusandae eos, ipsa at nesciunt iusto
          quos sequi molestiae qui ratione error pariatur minima reiciendis? Suscipit necessitatibus officia ratione
          quibusdam.
        </td>
      </tr>
    </table>

    *当然flex最简单，将单个 flex-child 置于 flex-parent
    的中心，这样不管是不是inline都行，父元素有固定高度才适合：<code>display: flex;justify-content: center;align-items: center;height: 100px;</code>
    <div
      class="father"
      style="display: flex;justify-content: center;align-items: center;height: 100px;"
    >
      <div class="son">
        第01个 默认<code>display: block;</code>
      </div>
    </div>

    使用“幽灵元素”，在容器内放置一个全高的伪元素，文本与它垂直对齐，当然超出一行也不行了
    父元素 <code>.ghost-center {
      position: relative;
      height: 100px;
      }</code> 父元素伪元素 <code>.ghost-center::before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      }</code> 子元素 <code>.son {
      display: inline-block;
      vertical-align: middle;
      }</code>
    <div class="father ghost-center">
      <span class="son">第01个默认<code>display: block;</code></span>
    </div>

    <h3>块元素</h3>
    <h4>子元素已知高度</h4>
    父元素 <code>position: relative;</code> 子元素 <code>position: absolute;top: 50%;height: 20px;margin-top: -10px;</code> 子元素计算margin-top为负值的方法：子元素高度的一半乘以-1，考虑padding和border的话，
    <code>margin-top: calc(子元素高度的一半乘以-1 - padding - border);</code>；如果box-sizing: border-box;那么就是 <code>margin-top: calc(子元素高度的一半乘以-1);</code>
    <div
      class="father"
      style="position: relative;height: 100px;"
    >
      <div
        class="son"
        style="position: absolute;top: 50%;height: 20px;margin-top: -10px;"
      >
        第01个默认<code>position: absolute;top: 50%;height: 20px;margin-top: -10px;</code>
      </div>
    </div>
    <h4>未知高度的元素</h4>
    父元素 <code>position: relative;</code> 子元素 <code>position: absolute;top: 50%;transform: translateY(-50%);</code>
    <div
      class="father"
      style="position: relative;height: 100px;"
    >
      <div
        class="son"
        style="position: absolute;top: 50%;transform: translateY(-50%);"
      >
        第01个默认<code>position: absolute;top: 50%;transform: translateY(-50%);</code>
      </div>
    </div>
    <h4>使用<code>display: table;</code>和<code>display: table-cell;</code></h4>
    这样的话子元素可能会撑大父元素，父元素：<code>display: table;</code> 子元素：<code>display: table-cell;vertical-align: middle;height:100px</code>
    <div
      class="father"
      style="display: table;"
    >
      <div
        class="son"
        style="display: table-cell;vertical-align: middle;height:100px"
      >
        第01个默认<code>display: table-cell;vertical-align: middle;height:100px</code>
      </div>
    </div>
    <h4>使用flex</h4>
    flexbox最简单了，父元素：<code>display: flex;align-items: center;height: 100px;</code> 子元素：<code>display: block;</code> 
    <div
      class="father"
      style="display: flex;align-items: center;height: 100px;"
    >
      <div class="son">
        第01个默认<code>display: block;</code>
      </div>
    </div>

    <h2>水平和垂直居中</h2>
    <h3>子元素高度已知，margin加上定位</h3>
    父元素 <code>position: relative;height: 200px;</code> 子元素需要计算margin，然后设置定位top50%和left50%
    <div
      class="father"
      style="position: relative;height: 200px;"
    >
      <div
        class="son"
        style="width: 300px; height: 100px; padding: 20px; position: absolute; top: 50%; left: 50%; margin: -70px 0 0 -170px;"
      >
        .son<code>width: 300px; height: 100px; padding: 20px; position: absolute; top: 50%; left: 50%; margin: -70px 0 0 -170px;</code>
      </div>
    </div>

    <h3>子元素高度未知，transform: translate(-50%, -50%);</h3>
    父元素 <code>position: relative;height: 200px;</code> 子元素 <code>position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);</code>
    <div
      class="father"
      style="position: relative;height: 200px;"
    >
      <div
        class="son"
        style="width: 300px; height: 100px; padding: 20px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
      >
        .son<code>width: 300px; height: 100px; padding: 20px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);</code>
      </div>
    </div>

    <h3>使用flex</h3>
    父元素 <code>display: flex;justify-content: center;align-items: center;height: 200px;</code> 子元素 <code>display: block;</code>
    <div
      class="father"
      style="display: flex;justify-content: center;align-items: center;height: 200px;"
    >
      <div class="son">
        .son<code>display: block;</code>
      </div>
    </div>

    <h3>Grid布局</h3>
    父元素 <code>display: grid;place-items: center;height: 200px;</code> 子元素 <code>display: block;</code>
    <div
      class="father"
      style="display: grid;place-items: center;height: 200px;"
    >
      <div class="son">
        .son<code>display: block;</code>
      </div>
    </div>

    子元素使用margin也可以 父元素 <code>display: grid;height: 200px;</code> 子元素 <code>margin: auto;</code>
    <div
      class="father"
      style="display: grid;height: 200px;"
    >
      <div
        class="son"
        style="margin: auto;"
      >
        .son<code>margin: auto;</code>
      </div>
    </div>

    <h2>参考链接</h2>
    <div>
      <a href="https://css-tricks.com/centering-css-complete-guide/">https://css-tricks.com/centering-css-complete-guide/</a>
      <br>
      <a href="https://www.w3cplus.com/css/centering-css-complete-guide.html">https://www.w3cplus.com/css/centering-css-complete-guide.html</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style type="text/css">
    code {
      background-color: #eee;
      padding: 2px;
      border-radius: 2px;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.209) 0px 0px 0px 1px inset;
    }

    .father {
      box-shadow: rgba(223, 9, 9, 0.825) 0px 0px 3px 0px, rgba(245, 37, 37, 0.1) 0px 0px 1px 0px;
      /* 下一个元素前空出10px高度 */
      margin-bottom: 10px;
    }

    .son {
      box-shadow: rgba(3, 101, 214, 0.71) 0px 0px 0px 1px inset;
    }

    .ghost-center {
      position: relative;
      height: 100px;
    }

    .ghost-center::before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    .ghost-center>* {
      display: inline-block;
      vertical-align: middle;
    }
  </style>