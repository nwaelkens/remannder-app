<template>
  <div>
    <div class="columns">
      <div v-for="(day, i) in days" :key="i" class="column">
        <day-calendar-component :isToday="todayNumber===day.id" :name="day.name" :number="day.id"></day-calendar-component>
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
      days: [
        { name: "Zondag", id: 0 },
        { name: "Maandag", id: 1 },
        { name: "Dinsdag", id: 2 },
        { name: "Woensdag", id: 3 },
        { name: "Donderdag", id: 4 },
        { name: "Vrijdag", id: 5 },
        { name: "Zaterdag", id: 6 }
      ]
    };
  },
  computed: {
    todayNumber() {
      return new Date().getDay();
    }
  }
};
</script>

<style scoped>
.item {
  font-family: "Caveat", cursive;
}

section,
.carousel {
  height: 100%;
}
</style>