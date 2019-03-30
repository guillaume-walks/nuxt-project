<template>
  <div>
    <Navbar/>
    <nuxt/>
    <slideout-panel></slideout-panel>
    <Footer/>
  </div>
</template>


<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VueLazyload from "vue-lazyload";
import Vue from "vue";
Vue.use(VueLazyload);
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>


<style>
html,
body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

a,
a:visited {
  text-decoration: none;
}

.page-enter-active {
  animation: acrossIn 0.45s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.65s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>

