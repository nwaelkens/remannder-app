<template>
  <div class="day" :class="isToday ? 'today' : ''">
    <div class="inside">
      <p class="name">{{ name }}</p>
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
    name,
    isToday: {
      default: false,
      type: Boolean
    },
    number: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.day {
  height: 10rem;
  background-color: #fff;
}
.day .inside {
  padding: 1rem;
}
.day .name {
  border-bottom: 1px solid #000;
}
.day.today {
  background-color: #8fc;
}
</style>