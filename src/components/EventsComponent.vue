<template>
  <event-component></event-component>
</template>

<script>
import EventComponent from "~/components/EventComponent";
export default {
  components: {
    EventComponent
  },
  data() {
    return {
      events: [{ event: "Naar de kerk", date: "primary" }]
    };
  }
};
</script>

<style scoped>
</style>