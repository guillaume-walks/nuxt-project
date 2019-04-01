<template>
  <div class="wrapper">
    <Hero title="Contact"/>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";

export default {
  components: {
    ...Components
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