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
    dates: {
      type: Array,
      default: () => [] // [ { date: '2020-12-12', type: 'error' }]
    },
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
