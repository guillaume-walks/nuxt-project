<template>
  <div class="container">
    <h1>Search a product by name...</h1>
    <input class="input" type="text" v-model="search" placeholder="Search">
    results ({{filtered.length}})
    <div class="main-container" v-if="products && filtered.length">
      <div class v-for="product of filtered" :key="product.id">
        <card :info="product" :callback="select"/>
      </div>
    </div>
    <template v-else>
      <error-message/>
    </template>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">{{error.message}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { productPath } from "@/const/config";
import Card from "@/components/card";
import ErrorMessage from "@/components/error-message";
export default {
  components: {
    Card,
    ErrorMessage
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
.container {
  background: #222;
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main-container > div {
  width: 31%;
  margin-bottom: 3.5%;
}
</style>
