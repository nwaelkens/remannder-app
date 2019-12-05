// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";
// import "balloon-css";
import "~/assets/styles.css";
import "buefy/dist/buefy.css";
import VueAgile from "vue-agile";

// Then add it to export function

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(Buefy);
  Vue.use(VueAgile);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Domine|Indie+Flower&display=swap"
  });
}
