<template>
  <section class="spotlights">
    <linear v-for="(item, index) in items" :key="index" ></linear>
  </section>
</template>

<script>
import linear from '~/components/linear'
export default {
  components: {
    linear
  },
  mounted() {
    console.log(this.items)
  },
  props: {    
    items: {
      required: true,
      type: Array
    }
  }
}
</script>
