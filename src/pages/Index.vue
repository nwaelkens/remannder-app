<template>
  <Layout>
    <!-- <div class="hero-head">
      <date-time-component></date-time-component>
    </div>
    <div class="hero-body">
      <div class="container">
        <slide-show-component></slide-show-component>
      </div>
    </div>
    <div class="hero-foot">-->
    <!-- </div> -->
    <!-- <div class="hero-body"> -->
    <!-- <div class="hero-head"> -->
    <!-- <div class="container"> -->
    <div>
      <slide-show-component></slide-show-component>
    </div>

    <div class="bottom-layer">
      <week-calendar-component></week-calendar-component>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="hero-foot"></div> -->
  </Layout>
</template>

<script>
import SlideShowComponent from "~/components/SlideShowComponent";
import WeekCalendarComponent from "~/components/WeekCalendarComponent";
import DateTimeComponent from "~/components/DateTimeComponent";
export default {
  components: {
    DateTimeComponent,
    WeekCalendarComponent,
    SlideShowComponent
  }
};
</script>

<style scoped>
.bottom-layer {
  position: absolute;
  bottom: 0;
}

section {
  margin: 0;
  padding: 0;
}
.hero-body {
  background-color: #f00;
  margin: 0;
  padding: 0;
  flex-direction: row;
}

.hero-foot {
  background-color: #ddd;
}
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
