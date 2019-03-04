<template>
  <header id="header" class="reveal alt">
    <a href="index.html" class="logo">
      <strong>Forty</strong>
      <span>by HTML5 UP</span>
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
  methods: {
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

