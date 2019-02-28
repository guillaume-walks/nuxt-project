<template>
  <header id="header" class="reveal alt">
    <a href="index.html" class="logo">
      <strong>Forty</strong>
      <span>by HTML5 UP</span>
    </a>
    <nav>
      <a href="#menu" @click.prevent="toggle">Menu</a>
    </nav>
  </header>
</template>

<script>
import { routes } from "@/static/route.js";
export default {
  data() {
    return {
      routes: routes,
      showNav: false
    };
  },
  methods: {
    toggle() {
      var element = document.getElementsByTagName("body")[0];
      element.classList.toggle("is-menu-visible");
    }
  }
};
</script>

<style>
</style>

