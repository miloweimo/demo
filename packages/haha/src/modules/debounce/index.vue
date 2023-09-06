<template>
  <div>
    <h1>debounce防抖</h1>
    <p>
      在 JavaScript 中，防抖（debounce）函数可以确保你的代码在每个用户输入时只被触发一次。搜索框建议、文本字段自动保存和消除双键点击都是防抖的用例。
    </p>
    <v-btn @click="msg = '', count = 0">清空</v-btn>
    <v-btn @click="handleClick">不防抖</v-btn>
    <v-btn @dblclick="handleClick">不防抖 + 双击</v-btn>
    <v-btn @click="handleClick2">简单防抖 {{ delay }}ms</v-btn>
    <v-btn @dblclick="handleClick2">简单防抖 {{ delay }}ms + 双击</v-btn>
    <v-text-field
      dense
      outlined
      v-model="delay"
      type="number"
      label="防抖时间ms"
      style="display: inline-block;width: max-content;"
    ></v-text-field>
    <hr class="my-2" />
    <p>_防抖函数 参考<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10304">lodash源码</a></p>
    <p>使用注意一定要看 https://css-tricks.com/debouncing-throttling-explained-examples </p>
    <v-btn @click="msg = '', count = 0">清空</v-btn>
    <v-btn @click="handleClickH">_防抖函数 最后事件有效</v-btn>
    <v-btn @dblclick="handleClickH">_防抖函数 最后事件有效 + dbl</v-btn>
    <v-btn @click="cancelDebounce">立即取消运行中的防抖函数</v-btn>
    <v-btn @click="execDebounce">立即执行运行中的防抖函数</v-btn>
    <hr class="my-2" />
    <div>
      输出：{{count}}<br />
      {{ msg }}
    </div>
  </div>
</template>

<script>
import _ from "lodash";

let that = null;
const handleClickH = _.debounce(function () {
  console.log("防抖函数执行！");
  that.msg += " 点";
  that.count++;
}, 500);
const cancelDebounce = () => {
  console.log("取消运行中的防抖函数");
  handleClickH.cancel();
};
const execDebounce = () => {
  console.log("立即执行运行中的防抖函数");
  handleClickH.flush();
};

let timer = null;
export default {
  data() {
    return {
      count: 0,
      msg: "",
      delay: 200,
      handleClickH,
      cancelDebounce,
      execDebounce,
    };
  },
  mounted() {
    that = this;
  },
  methods: {
    myDebounce(fn, delay = 0) {
      console.log('防抖函数', fn, delay);
      return ( ...args ) => {

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },
    handleClick() {
      this.msg += " 点";
      this.count++;
    },
    handleClick2() {
      this.myDebounce(() => {
        this.msg += " 点";
        this.count++;
      }, this.delay)();
    },
    // // 不能多次调用debounce函数，否则会多次执行
    // handleClickH: _.debounce(function () {
    //   this.msg += " 点";
    //   this.count++;
    // }, 500),
    // cancelDebounce() {
    //   // 取消运行中的防抖函数
    //   this.handleClickH.cancel();
    // },
    // execDebounce() {
    //   // 立即执行运行中的防抖函数
    //   this.handleClickH.flush();
    // },
  },
};
</script>

<style>
.v-btn {
  margin-right: 10px;
}
</style>