<template>
  <div class="columns">
    <div class="column">
      <p>{{ name }}</p>
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
    name: "",
    number: "0"
  },
  data() {
    return {};
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