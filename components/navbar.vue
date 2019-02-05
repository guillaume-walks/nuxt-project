<template>
  <div class="container-fluid">
    <nav class="navbar" role="navigation" aria-label="main navigation">
     
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Project</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <template v-for="route in routes">
            <nuxt-link class="navbar-item" :key="route.name" :to="route.path">{{ route.name }}</nuxt-link>
          </template>
          <!-- <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/product">Products</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { routes } from '@/static/route.js'
export default {
  data () {
    return {
      routes: routes
    }
  }
}
</script>
