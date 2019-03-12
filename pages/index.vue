<template>
  <div id="wrapper">
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
    <Footer/>
  </div>
</template>

<<<<<<< HEAD
<style>
a.navbar-item:hover {
  background: rgb(80, 80, 80);
  color: #9bf1ff;
}
.navbar,
.navbar-menu {
  background-color: #222;
  color: #9bf1ff;
}
.navbar-item,
.navbar-link {
  color: #9bf1ff;
}
/* @import "~/assets/style.css"; */
.container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  padding: 60px;
}
</style>
=======
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
>>>>>>> 2f1c7bf73f34bcf798f9503960555756033c6b7b
