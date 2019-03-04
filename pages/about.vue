<template>
  <div id="wrapper">
    <Hero title="About..."/>
    <Footer/>
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
