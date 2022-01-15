<template>
  <div>
    <h1 class="">Highchart</h1>
    <span class="text--subtitle-1 grey--text"
      >兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5
      交互性图表库</span
    >

    <h2>haha wode</h2>
    <span class="text--subtitle-1 grey--text">年轻人的第一个🤮表</span>
    <div class="highcharts-container diagram-style" ref="chart1">
      我是一个highchart容器div
    </div>

    <hr />

    <h2>参考</h2>
    <p>
      <a href="https://www.highcharts.com.cn/docs">Highcharts 文档</a>
    </p>
  </div>
</template>

<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  name: "highchart",
  mounted() {
    console.log("图表1的数据：", this.d1.options);
    this.haha();
    this.initchart();
  },
  methods: {
    initchart() {
      console.log("初始化chart", this.$el);
      // this.$el.style.width = (this.styles.width || 800) + "px";
      // this.$el.style.height = (this.styles.height || 400) + "px";
      // this.chart = new Highcharts.Chart(this.$el, this.options);

      console.log("初始化chart refs", this.$refs.chart1);
      this.$refs.chart1.width = (this.d1.styles.width || 800) + "px";
      this.$refs.chart1.height = (this.d1.styles.height || 400) + "px";
      this.chart = new Highcharts.Chart(this.$refs.chart1, this.d1.options);
      setTimeout(() => {
        this.d1.options.series[1].data[3] = 6;
        this.d1.options.series[1].data[4] = 6;
        this.d1.options.series[1].data[0] = Infinity;
        console.log(this.d1.options.series[1].data);
        this.d1.options.series[1].name = '哈哈';

        this.d1.options.yAxis.title.text = '喜欢评分（满分-∞）';
        this.chart = new Highcharts.Chart(this.$refs.chart1, this.d1.options);
      }, 2000);
    },
    haha() {
      console.log("haha");
    },
  },
  data() {
    return {
      d1: {
        options: {
          chart: {
            type: "line", //指定图表的类型，默认是折线图（line）
          },
          title: {
            text: "", // 标题
          },
          xAxis: {
            categories: ["苹果", "香蕉", "橙子", "雪梨", "迷幻蘑菇",'太空辣鸡'], // x 轴分类
          },
          yAxis: {
            title: {
              text: "吃", // y 轴标题
            },
          },
          series: [
            {
              // 数据列
              name: "小明", // 数据列名
              data: [1, 0, 4,], // 数据
            },
            {
              name: "小红",
              data: [5, 7, 3],
            },
          ],
        },
        styles: {
          width: "800px",
          height: "400px",
        },
      },
    };
  },
};
</script>

<style>
.diagram-style {
  margin-top: 10px;
  margin-bottom: 10px;
  outline: solid;
}
</style>
