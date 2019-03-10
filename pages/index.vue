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
import Hero from "~/components/hero";
import Footer from "~/components/footer";
export default {
  components: {
    Hero,
    Footer
  }
};
</script>
