<template>
  <header id="header" ref="headerbar" class="reveal alt">
    <a href="index.html" class="logo">
      <strong>FORTY</strong>
      <span>by NUXT</span>
    </a>
    <nav>
      <a href="#menu" @click.prevent="toggle(true)">Menu</a>
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
  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll() {
      if (window.pageYOffset > 50) {
        this.$refs.headerbar.style.position = "fixed";
      } else {
        this.$refs.headerbar.style.position = "absolute";
      }
    },
    toggle(open) {
      if (!open) {
        this.panelInstance.hide();
        return;
      }
      this.panelInstance = this.$showPanel({
        component: Sidemenu,
        width: 350,
        keepAlive: true,
        props: {
          onClose: this.toggle
        }
      });
      this.panelInstance.promise.then(result => {});
    }
  }
};
</script>

<style>
</style>

