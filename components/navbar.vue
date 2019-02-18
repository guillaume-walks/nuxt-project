<template>
  <div class="container-fluid">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Logo"> -->
          Project
        </a>

        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <template v-for="route in routes">
            <nuxt-link class="navbar-item" :key="route.name" :to="route.path">{{ route.name }}</nuxt-link>
          </template>
        </div>
      </div>
    </nav>
  </div>
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
.navbar-burger {
  color: grey;
}
</style>

