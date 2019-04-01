<template>
  <div class="wrapper">
    <component :is="model.name" v-bind="model.props"></component>
    <button @click="change">change</button>
    <hr>
    <component v-for="(comp, index) in list" :is="comp" :key="index" v-bind="dyn[comp].props"></component>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";

export default {
  name: "dynamicpage",
  components: {
    ...Components
  },
  data() {
    return {
      val: false,
      heroP: {
        name: "hero",
        props: {
          title: "dynamic title",
          text: "dynamoc text..."
        }
      },
      paragraphP: {
        name: "paragraph",
        props: {}
      },
      list: [
        "hero",
        "hero",
        "paragraph",
        "hero",
        "hero",
        "hero",
        "hero",
        "hero",
        "hero",
        "hero",
        "hero",
        "hero"
      ],
      dyn: {
        hero: {
          name: "hero",
          props: {
            title: "dynamic title",
            text: "dynamoc text..."
          }
        },
        paragraph: {
          name: "paragraph",
          props: {}
        }
      }
    };
  },
  computed: {
    model() {
      return this.val ? this.heroP : this.paragraphP;
    }
  },
  methods: {
    change() {
      this.val = !this.val;
    }
  }
};
</script>

<style>
</style>
