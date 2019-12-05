<template>
  <!-- <b-carousel
    :indicator="false"
    :arrow="false"
    :interval="3000"
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
      </section>
    </b-carousel-item>
  </b-carousel>-->
  <agile
    :nav-buttons="false"
    :dots="false"
    :autoplay-speed="8000"
    :speed="3000"
    loop
    fade
    autoplay
    :pause-on-hover="false"
  >
    <div v-for="(carousel, i) in carousels" :key="i">
      <div
        class="slide hero is-large"
        :style="
          'background-image: url(\'../../uploads/' +
            carousel.file +
            '\');background-size: cover;'
        "
      ></div>
    </div>
  </agile>
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
.slide {
  display: block;
  height: 100vh;
  object-fit: cover;
  width: 100%;
}

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
