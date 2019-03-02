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
import Sidemenu from "~/components/Sidemenu";
export default {
  components: {
    Sidemenu
  },
  data() {
    return {
      routes: routes,
      showNav: false
    };
  },
  methods: {
    toggle() {
      const panelInstance = this.$showPanel({
        component: Sidemenu,
        width: 350,
        keepAlive: true,
        props: {
          //any data you want passed to your component
        }
      });
      panelInstance.promise.then(result => {});

      // const element = document.getElementsByTagName("body")[0];
      // element.classList.toggle("is-menu-visible");
    }
  }
};
</script>

<style>
</style>

