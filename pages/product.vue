<template>
  <div id="wrapper">
    <hero/>

    <Search @changed="callback">
      <h4>{{filtered.length}} {{ suffix }} found</h4>
    </Search>

    <section class="tiles">
      <Tile v-for="product of filtered" :key="product.id" :info="product" :callback="select"/>
    </section>

    <Paragraph/>

    <section class="spotlights">
      <Linear/>
      <Linear/>
      <Linear/>
      <Linear/>
      <Linear/>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Tile from "~/components/tile";
import Hero from "~/components/hero";
import Search from "~/components/search";
import Linear from "~/components/linear";
import Paragraph from "~/components/paragraph";
import { productPath } from "@/const/config";
import Card from "@/components/card";
import ErrorMessage from "@/components/error-message";

export default {
  components: {
    Card,
    ErrorMessage,
    Tile,
    Hero,
    Paragraph,
    Linear,
    Search
  },
  data() {
    return {
      errors: [],
      search: "",
      selected: null
    };
  },
  methods: {
    select(el) {
      console.log(el);
      this.selected = el;
    },
    callback(e) {
      console.log("callback,,,,", e);
      this.search = e;
    }
  },
  computed: {
    suffix() {
      return this.filtered.length > 1 ? "results" : "result";
    },
    filtered() {
      return this.products.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
    // products() {
    //   return this.$store.state.product.list;
    // }
  },
  asyncData({ params }) {
    return axios
      .get(`${productPath}`)
      .then(res => {
        return { products: res.data };
      })
      .catch(e => {
        if (window) {
          console.log(e, "asyncData error:: API call...", window.__data);
          window.__data = { cur: window.location.href };
          window.location.href = window.__data.cur + "product/";
        }
      });
  }
  // async fetch({ store, error, payload }) {
  //   console.log(store, error, payload);
  //   if (!store.getters["product/isFetched"]) {
  //     await store.dispatch("product/fetchProduct");
  //   }
  // }
};
</script>

<style >
</style>
