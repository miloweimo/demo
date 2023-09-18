<template>
  <div class="month">
    <div
      class="d-flex flex-wrap px-4"
      style="height: 100%;"
    >
      <div
        v-for="i in 12"
        :key="i" 
        class="pa-3"
        style="width: 25%;border: 1px solid none;overflow: auto;"
      >
        <div
          style="text-align: center;border-radius: 5px;"
          :class="getMonthClass(i)"
        >
          {{ i }}月
        </div>
        <CalendarCard
          :value="dates"
          :month="i"
          class="mycalender"
          mode="multiple"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarCard from './calender-card/src/common/CalendarCard.vue'

export default {
  components: {
    CalendarCard,
  },
  props: {
    // dates: {
    //   type: Array,
    //   default: () => [
    //     // {date: '2023-01-01', type: 'good'},
    //   ]
    // },
    securityDays: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
    }
  },
  computed: {
    goodCount() {
      return this.dates.filter(item => item.type === 'good').length
    },
    warnnigCount() {
      return this.dates.filter(item => item.type === 'warning').length
    },
    errorCount() {
      return this.dates.filter(item => item.type === 'error').length
    },
    dates() {
      let list = [
        {date: '01-01', type: 'good', name: '元旦'},
        // {date: '02-26', type: 'good', name: '春节'}, // fake
        // {date: '02-27', type: 'good', name: '春节'}, // fake
        // {date: '02-28', type: 'good', name: '春节'}, // fake
        // {date: '04-04', type: 'good', name: '清明'}, // fake
        {date: '05-01', type: 'good', name: '劳动节'},
        // {date: '05-04', type: 'good', name: '端午'}, // fake
        // {date: '05-04', type: 'good', name: '中秋'}, // fake
        {date: '10-01', type: 'good', name: '国庆节'},
        {date: '10-02', type: 'good', name: '国庆节'},
        {date: '10-03', type: 'good', name: '国庆节'},
      ]
      list = list.map(item => ({
        ...item,
        date: new Date().getFullYear() + '-' + item.date,
      }))
      console.log(list);
      return list;
    },
  },
  methods: {
      // month 1 - 12 
      getMonthClass(month) {
      const monthString = `0${month}`.slice(-2)
      const eventList = this.dates.filter(item => item.date.split('-')[1] === monthString)
      // find error return 'errormonth'
      if (eventList.find(item => item.type === 'error')) {
        return 'errormonth'
      }
      // find warning return 'warningmonth'
      if (eventList.find(item => item.type === 'warning')) {
        return 'warningmonth'
      }
      // default return 'goodmonth'
      return 'goodmonth'
    },

  },
}
</script>

<style lang="scss" scoped>
$warning: #ffd296;
$error: #f88d8d;
$good: #f8bbd0;
$main: #e91e63;
$background: #e8f0ff;
.month {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #e8f0ff, #00aaff00);
  border-radius: 10px;
}
.mycalender {
  background: $background;
  width: 100%;
  ::v-deep .footer {
    display: none;
  }
  ::v-deep .calendar-header {
    display: none;
  }
  ::v-deep .prev {
    color: transparent;
  }
  ::v-deep .next {
    color: transparent;
  }
}

.goodmonth {
  background: $good;
  color: #3058ae;
}

.warningmonth {
  background: $warning;
  color: #3058ae;
}

.errormonth {
  background: $error;
  color: #3058ae;
}

</style>
