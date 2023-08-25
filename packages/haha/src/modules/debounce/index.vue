<template>
  <div>
    <h1>debounce防抖</h1>
    <p>
      在 JavaScript 中，防抖（debounce）函数可以确保你的代码在每个用户输入时只被触发一次。搜索框建议、文本字段自动保存和消除双键点击都是防抖的用例。
    </p>
    <v-btn @click="msg = '', count = 0">清空</v-btn>
    <v-btn @click="handleClick">不防抖</v-btn>
    <v-btn @click="handleClick2">防抖 {{ delay }}ms</v-btn>
    <v-text-field
      dense
      outlined
      v-model="delay"
      type="number"
      style="display: inline-block;width: max-content;"
    ></v-text-field>
    <hr class="my-2" />
    <div>
      输出：{{count}}<br />
      {{ msg }}
    </div>
  </div>
</template>

<script>
let timer = null;
export default {
  data() {
    return {
      count: 0,
      msg: "",
      delay: 200,
    };
  },
  methods: {
    debounce(fn, delay = 300) {
      return ( ...args ) => {

        console.log(timer);
        if (timer) {
          clearTimeout(timer);
          console.log("clear", timer);
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
      this.debounce(() => {
        this.msg += " 点";
        this.count++;
      }, this.delay)();
    },
  },
};
</script>

<style>
.v-btn {
  margin-right: 10px;
}
</style>