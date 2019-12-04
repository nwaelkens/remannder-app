<template>
  <b-carousel
    :indicator="false"
    :arrow="false"
    :interval="4000"
    :autoplay="true"
    :pause-hover="false"
    animated="fade"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section
        class="hero is-large"
        :style="
          'background-image: url(\'../../uploads/' +
            carousel.file +
            '\');background-size: cover;'
        "
      >
        <div
          class="hero-body is-fullheight has-text-centered"
          :style="'background-image: url(\'../../uploads/' + file + ');'"
        ></div>
        <!-- <img
          src="../../static/uploads/f2b94d42-70f6-4e8b-b82f-eb47120b5c94.JPG"
        /> -->
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { file: "loofhut.jpg" },
        { file: "IMG_5358.JPG" },
        { file: "IMG_5423.JPG" },
        { file: "IMG_5424.JPG" },
        { file: "IMG_5425.JPG" },
        { file: "f2b94d42-70f6-4e8b-b82f-eb47120b5c94.JPG" },
        { file: "IMG_5617.JPG" }
      ]
    };
  }
};
</script>

<style scoped>
.item {
  font-family: "Caveat", cursive;
}

.carousel-list {
  min-height: 100vh;
}

.carousel-item {
  min-height: 100vh !important;
}

.carousel-item section {
  min-height: 100vh !important;
  background-image: ;
}
</style>
