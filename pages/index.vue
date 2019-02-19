<template>
  <div class="container">
    <h1 class="toto">Welcome! App</h1>
    <p>
      <nuxt-link to="/product">Product page</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/contact">contact page</nuxt-link>
    </p>
  </div>
</template>

<style>
@import "~/assets/style.css";
.container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  padding: 60px;
}
</style>