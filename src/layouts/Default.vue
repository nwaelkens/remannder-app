<template>
  <div class="layout">
    <section class="hero is-fullheight">
      <slot />
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  /* font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif; */
  font-family: "Domine", serif;
  margin: 0;
  padding: 0;
  /* line-height: 1.5; */
}
body * {
  font-family: "Domine", serif;
}

.layout {
  margin: 0;
  padding: 0;
}

.nav__link {
  margin-left: 20px;
}

div {
  padding: 0;
  margin: 0;
}
</style>
