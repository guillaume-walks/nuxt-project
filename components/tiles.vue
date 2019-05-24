<template>
  <section class="tiles">
    <tile v-for="(item, index) in items" :key="index" :info="item.props"></tile>
  </section>
</template>

<script>
import tile from '~/components/tile'
export default {
  components: {
    tile
  },
  mounted() {
    // console.log(this.items)
  },
  props: {    
    items: {
      required: true,
      type: Array
    }
  }
}
</script>
