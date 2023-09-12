<template>
  <div id="date-page">
    <div>
      <h2>📅<a href="https://day.js.org/"><i>dayjs</i></a>日期转换demo</h2>
      <hr>

      <h3>通过日期对象Date</h3>
      输入日期: <input
        v-model="date"
        type="datetime-local"
        step="1"
        class="string string-box"
      > <code class="string">{{ `'${date}'` }}</code><br>
      <h4>获得iso周数</h4>
      这年共n周: <code>dayjs('{{ date }}').endOf('year').isoWeek()</code><br>
      输出:<code class="number">{{ dayjs(date).endOf('year').isoWeek() }}</code><br>
      当前第n周: <code>dayjs('{{ date.substring(0, 10) }}').isoWeek()</code><br>
      输出: <code class="number">{{ dayjs(date.substring(0, 10)).isoWeek() }}</code><br>
      这个月第一天周数: <code>dayjs(date).startOf('month').isoWeek()</code><br>
      输出: <code class="number">{{ dayjs(date).startOf('month').isoWeek() }}</code><br>
      <h4>获得日期</h4>
      当前周周一日期: <code>dayjs(date).isoWeekday(1)</code><br>
      输出: <code class="string">'{{ dayjs(date).isoWeekday(1) }}'</code><br>
      当前周周日日期YYYY-MM-DD: <code>dayjs(date).isoWeekday(7).format('YYYY-MM-DD')</code><br>
      输出: <code class="string">'{{ dayjs(date).isoWeekday(7).format('YYYY-MM-DD') }}'</code><br>
      这年一月一日上午00:00: <code>dayjs(date).startOf('year').format('YYYY-MM-DD HH:mm:ss')</code><br>
      输出: <code class="string">'{{ dayjs(date).startOf('year').format('YYYY-MM-DD HH:mm:ss') }}'</code><br>
      <br>

      <h3>通过年份和周数</h3>
      <h4>获得日期</h4>
      输入年和周: <input
        v-model="year"
        type="number"
        class="number number-box"
        style="width: 4.5rem;"
      > <input
        v-model="weeknumber"
        type="number"
        class="number number-box"
        style="width: 4.5rem;"
      ><br>
      这周一日期YYYY-MM-DD: <code>dayjs(`${String(year)}-01-19`, 'YYYY-MM-DD').isoWeekday(1).isoWeek(weeknumber).format('YYYY-MM-DD')</code><br>
      输出: <code class="string">'{{ dayjs(`${String(year)}-01-19`, 'YYYY-MM-DD').isoWeekday(1).isoWeek(weeknumber).format('YYYY-MM-DD') }}'</code><br>
      这周六日期YYYY-MM-DD: <code>dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(-1).isoWeek(weeknumber).format('YYYY-MM-DD')</code><br>
      输出: <code class="string">'{{ dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(-1).isoWeek(weeknumber).format('YYYY-MM-DD') }}'</code><br>
      这周日日期YYYY-MM-DD: <code>dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber).format('YYYY-MM-DD')</code><br>
      输出: <code class="string">'{{ dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber).format('YYYY-MM-DD') }}'</code><br>
      上周日日期YYYY-MM-DD: <code>dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD')</code><br>
      输出: <code class="string">'{{ dayjs(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD') }}'</code><br>
      <br>
      <hr>

      <h3>其他参考</h3>
      ISO周 从星期一开始,周日结束<br>
      01 周的 <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> 定义是公历年（即一月）的第一个星期四所在的一周<a href="https://en.wikipedia.org/wiki/ISO_week_date">wiki</a><br>
      <a href="https://dayjs.gitee.io/zh-CN/">Day.js 中文文档</a><br>
      <a href="https://day.js.org/docs/zh-CN/manipulate/start-of">Start of Time文档</a>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const isoWeek = require('dayjs/plugin/isoWeek')
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      dayjs,
      isodate: '',
      date: '2077-01-01',
      datenumber: 0,
      weeknumber: 40,
      year: -1,
    }
  },
  mounted() {
    this.datenumber = Number(this.dayjs().format('YYYYMMDD'));
    // dayjs.tz.setDefault("Asia/Shanghai");
    this.date = this.dayjs().format().substring(0, 19);
    this.isodate = this.dayjs().format();
    this.weeknumber = this.dayjs(this.date).isoWeek();
    this.year = Number(this.dayjs().format('YYYY'));
    setInterval(() => {
      this.isodate = this.dayjs().format();
    },1000)
  },  
}

</script>

<style scoped>
.number {
  color: blue !important;
}

.string {
  color: tomato !important;
}

.number-box {
  border: 1px solid blue;
  border-radius: 0.3rem;
}

.string-box {
  border: 1px solid tomato;
  border-radius: 0.3rem;
}
</style>
