<template>
  <div class="wrapper">
    <Hero title="Home page..."/>
    <div class="major">
      <div class="inner">
        <p>
          <nuxt-link to="/product/">Product page</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/contact">contact page</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";

export default {
  components: {
    ...Components
  }
};
</script>
