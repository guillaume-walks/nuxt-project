<template>
  <header id="header" class="reveal alt">
    <a href="index.html" class="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
    <nav>
      <a href="#menu">Menu</a>
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
  }
};
</script>

<style>

</style>

