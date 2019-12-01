<template>
  <Layout>
    <div class="hero-head">
      <date-time-component></date-time-component>
    </div>
    <div class="hero-body">
      <div class="container">
        <slide-show-component></slide-show-component>
      </div>
    </div>

    <div class="hero-foot">
      <week-calendar-component></week-calendar-component>
    </div>
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

<style>
section {
  margin: 0;
  padding: 0;
}
.hero-body {
  background-color: #f00;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>