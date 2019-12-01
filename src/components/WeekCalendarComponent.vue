<template>
  <div>
    <div v-for="(day, i) in days" :key="i">
      <day-calendar-component :name="day.name" :number="day.id"></day-calendar-component>
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
        { name: "Zondag", id: 1 },
        { name: "Maandag", id: 2 },
        { name: "Dinsdag", id: 3 },
        { name: "Woensdag", id: 4 },
        { name: "Donderdag", id: 5 },
        { name: "Vrijdag", id: 6 },
        { name: "Zaterdag", id: 7 }
      ]
    };
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