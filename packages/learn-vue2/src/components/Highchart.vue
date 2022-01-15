<template>
  <div>
    <h1 class="">Highchart</h1>
    <span class="text--subtitle-1 grey--text"
      >兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5
      交互性图表库</span
    >

    <h2>haha wode</h2>
    <span class="text--subtitle-1 grey--text">年轻人的第一个🤮表</span>
    <div
      id="diagram1"
      class="highcharts-container diagram-style"
      ref="chart1"
      style="min-width:400px;height:400px;"
    >
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
      console.log("初始化chart1", this.$el);
      // this.$el.style.width = (this.styles.width || 800) + "px";
      // this.$el.style.height = (this.styles.height || 400) + "px";
      // this.chart = new Highcharts.Chart(this.$el, this.options);

      console.log("初始化chart1 refs", this.$refs.chart1);
      // this.$refs.chart1.width = (this.d1.styles.width || 800) + "px";
      // this.$refs.chart1.height = (this.d1.styles.height || 400) + "px";
      // 1. 绑定 图表的第一种方式 #id
      this.chart = new Highcharts.Chart("diagram1", this.d1.options);
      // 1.1使用 document.getElementById('container')
      // this.chart = new Highcharts.Chart(document.getElementById('diagram1'), this.d1.options);
      // 1.2.
      //使用 $refs 找到虚拟DOM
      // this.chart = new Highcharts.Chart(this.$refs.chart1, this.d1.options);

      // 2、或者通过 chart.renderTo 来指定
      // this.d1.options.chart.renderTo = "diagram1";
      // this.chart = new Highcharts.Chart(
      //   // Highcharts 配置
      //   this.d1.options
      // );

      setTimeout(() => {
        this.d1.options.series[1].data[3] = 6;
        this.d1.options.series[1].data[4] = 6;
        this.d1.options.series[1].data[0] = Infinity;
        console.log(this.d1.options.series[1].data);
        this.d1.options.series[1].name = "哈哈";

        this.d1.options.yAxis.title.text = "喜欢评分（满分-∞）";
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
            // https://api.highcharts.com.cn/highcharts/series.html
            type: "columnpyramid", //指定图表的类型，默认是折线图（line） area,arearange,areaspline,areasplinerange,bar,bellcurve,boxplot,bubble,bullet,column,columnpyramid,columnrange,cylinder,dependencywheel,dumbbell,errorbar,funnel,funnel3d,gauge,heatmap,histogram,item,line,lollipop,networkgraph,organization,packedbubble,pareto,pie,polygon,pyramid,pyramid3d,sankey,scatter,scatter3d,solidgauge,spline,streamgraph,sunburst,tilemap,timeline,treemap,variablepie,variwide,vector,venn,waterfall,windbarb,wordcloud,xrange
            backgroundColor: "#eefdec",
            borderColor: "#EBBA95",
            borderWidth: 5,
            borderRadius: 30,
            // margin: [0, 0, 0, 0], // 外边距 改了轴线看不到了。。
            spacing: [50, 100, 10, 10], // 内边距
            // 其他样式：
            style: {
              fontFamily: "serif",
              fontSize: "15px",
              fontWeight: "bold",
            },
            colors: [
              "#ff8f3a",
              "#0d233a",
              "#8bbc21",
              "#910000",
              "#1aadce",
              "#492970",
              "#f28f43",
              "#77a1e5",
              "#c42525",
              "#a6c96a",
            ],
          },
          title: {
            text: "", // 标题
          },
          xAxis: {
            categories: [
              "苹果",
              "香蕉",
              "橙子",
              "雪梨",
              "迷幻蘑菇",
              "太空辣鸡",
            ], // x 轴分类
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
              data: [1, 0, 4], // 数据
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
  outline: #ff6935 solid;
}
</style>
