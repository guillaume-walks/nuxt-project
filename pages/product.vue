<template>
  <div class="wrapper">
    <Hero/>

    <Search @changed="callback">
      <h4>
        <strong>{{filtered.length}}</strong>
        {{ suffix }} found
      </h4>
    </Search>

    <component v-for="(comp, index) in config" :is="comp.type" :key="index" v-bind="comp.data"></component>

    <section class="tiles">
      <Tile v-for="product of filtered" :key="product.id" :info="product" :callback="select"/>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { productPath } from "@/const/config";
import Card from "@/components/card";
import ErrorMessage from "@/components/error-message";
import * as Components from "~/components/utils/importAll";
import Config from "../static/jsondata/product.json";

export default {
  components: {
    Card,
    ErrorMessage,
    ...Components
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
    console.log(Config);
    return axios
      .get(productPath)
      .then(res => {
        return {
          products: res.data,
          config: Config
        };
      })
      .catch(e => {
        if (window) {
          console.log(e, "asyncData error:: API call...", window.__data);
          window.__data = window.location;
          const path = window.location.pathname.split("/");
          path[path.length - 1] = "product";
          window.location.href = window.__data.origin + path.join("/");
          // window.location.href = window.__data.cur + "/product";
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

<style>
</style>
