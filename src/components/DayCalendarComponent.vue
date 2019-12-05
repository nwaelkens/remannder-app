<template>
  <div class="day" :class="isToday ? 'today' : ''">
    <div class="inside">
      <p class="name title is-5">{{ dayString }}</p>
      <events-component></events-component>
    </div>
  </div>
</template>

<script>
import EventsComponent from "~/components/EventsComponent";
export default {
  components: {
    EventsComponent
  },
  props: {
    isToday: {
      default: false,
      type: Boolean
    },
    date: null
  },
  computed: {
    dayString() {
      var options = {
        weekday: "long"
        // year: "numeric",
        // month: "long",
        // day: "numeric"
      };
      return this.date.toLocaleDateString("nl-NL", options);
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.day {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.2rem;
}
.day .inside {
  padding: 1rem;
}
.day .name {
  /* border-bottom: 1px solid #999; */
  padding: 0.2rem 0 0;
  color: rgba(0, 0, 0, 0.5);
}
.day .name:first-letter {
  text-transform: uppercase;
}
.day.today .name {
  /* border-bottom: 1px solid #000; */
  color: #000;
}
.day.today {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
