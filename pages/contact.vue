<template>
  <div id="wrapper">
    <Hero title="Contact"/>
  </div>
</template>

<script>
import Hero from "~/components/hero";
import Footer from "~/components/footer";
export default {
  components: {
    Hero,
    Footer
  },
  transition: "fadeOpacity"
};
</script>

<style>
.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}
</style>