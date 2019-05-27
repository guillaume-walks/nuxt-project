<template>
  <nav class="sidepanel">
    <div class="inner">
      <ul class="links">
        <!-- build routes from config -->
        <li v-for="(route, index) of routes" :key="index">
          <a @click.prevent="goTo(route)">{{route.name}}</a>
        </li>
      </ul>
      <ul class="actions stacked">
        <li>
          <a class="button primary fit">Get Started</a>
        </li>
        <li>
          <a class="button fit" @click.prevent="() => onClose(false)">close</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { routes } from "@/static/route.js";

export default {
  data() {
    return {
      routes: routes
    };
  },
  methods: {
    // navigate to page and close menu
    goTo(route) {
      this.$router.push({
        path: route.path,
        params: { pageUid: route.uid }
      });
      this.onClose(false);
    }
  },
  props: {
    onClose: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
</style>
