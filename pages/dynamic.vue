<template>
   <div id="wrapper">
    <component :is="model.name" v-bind="model.props"></component>
    <button @click="change">change</button>
  </div>
</template>

<script>
import hero from '~/components/hero'
import paragraph from '~/components/paragraph'
export default {
  name:'dynamicpage',
  components: {
    hero,
    paragraph
  },
  data(){
    return {
      val: false,
      heroP : {
        name: 'hero',
        props: {
          title: 'dynamic title',
          text: 'dynamoc text...'
        }
      },
      paraP : {
        name: 'paragraph',
        props: {

        }
      },
      list: ''
    }
  },
  computed: {
    model () {
      return this.val ? this.heroP : this.paraP
    }
  },
  methods: {
    change() {
      this.val = !this.val
    }
  }
}
</script>

<style>

</style>
