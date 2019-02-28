<template>
  <div>
    <div class="container">
      <h1>Search a product by name...</h1>
      <BookingWidget name="guillaume"/>
      <input class="input" type="text" v-model="search" placeholder="Search">
      results ({{filtered.length}})
    </div>
    <div id="main">
      <section id="one" class="tiles">
        <Tile v-for="product of filtered" :key="product.id" :info="product" :callback="select"/>
      </section>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Tile from "~/components/tile";
import BookingWidget from "booking-widget-vue";
import { productPath } from "@/const/config";
import Card from "@/components/card";
import ErrorMessage from "@/components/error-message";

Vue.use(BookingWidget);
export default {
  components: {
    Card,
    ErrorMessage,
    Tile
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
    }
  },
  computed: {
    filtered() {
      return this.products.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
  },
  asyncData({ params }) {
    console.log(productPath);
    return axios.get(`${productPath}`).then(res => {
      return { products: res.data };
    });
  }
};
</script>

<style >
</style>
