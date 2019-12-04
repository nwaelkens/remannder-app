<template>
  <ul class="events">
    <li v-for="(event, i) in events" :key="i" class="event">
      <event-component :content="event.content"></event-component>
    </li>
  </ul>
</template>

<script>
import EventComponent from "~/components/EventComponent";
export default {
  components: {
    EventComponent
  },
  data() {
    return {
      events: [
        { content: "Uw zus Riet komt vandaag." },
        { content: "Eten bij ons! Kom lekker met de fiets, mag van Jeroen!" }
      ]
    };
  }
};
</script>

<style scoped></style>
