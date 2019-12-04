<template>
  <div class="weekCalendar">
    <div class="columns">
      <div v-for="(position, index) in 5" :key="index" class="column">
        <day-calendar-component
          :isToday="getDate(position).getDay() === now.getDay()"
          :date="getDate(position)"
        ></day-calendar-component>
      </div>
    </div>
  </div>
</template>

<script>
import DayCalendarComponent from "~/components/DayCalendarComponent";
export default {
  components: {
    DayCalendarComponent
  },
  data() {
    return {
      now: null,
      showHowManyDays: 5,
      firstDayOffset: -1
    };
  },
  methods: {
    getDate(position) {
      position--;
      const newDate = new Date();
      return new Date(
        newDate.setDate(newDate.getDate() + position + this.firstDayOffset)
      );
    },
    currentDateTime() {
      var self = this;
      this.now = new Date();
      setTimeout(self.currentDateTime, 1000);
    }
  },
  created() {
    this.currentDateTime();
  }
};
</script>

<style scoped>
.item {
  font-family: "Caveat", cursive;
}
.weekCalendar {
  /* padding: 0;
  margin: 0; */
}
.column,
.columns {
  /* padding: 0; */
  /* margin: 0; */
}
</style>
