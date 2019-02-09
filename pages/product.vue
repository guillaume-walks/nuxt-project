<template>
  <div class="container">
    <h1>This is the product page</h1>
    <p>
      <nuxt-link to="/">Home page</nuxt-link>
    </p>

    <div class="columns" v-if="products && products.length">
      <div class="column" v-for="product of products" :key="product.id">
        <card :info="product"/>
        <!-- <p>
          <strong>{{product.name}}</strong>
        </p>
        <p>{{product.description}}</p>-->
      </div>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">{{error.message}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { productPath } from "@/const/config";
import Card from "@/components/card";
export default {
  components: {
    Card
  },
  data() {
    return {
      errors: []
    };
  },
  asyncData({ params }) {
    console.log(productPath);
    return axios.get(`${productPath}`).then(res => {
      return { products: res.data };
    });
  }
};
</script>

<style scoped>
.container {
  background: #222;
}
</style>