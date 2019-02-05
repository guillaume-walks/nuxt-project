<template>
  <div class="container">
    <h1>This is the product page</h1>
    <p><nuxt-link to="/">Home page</nuxt-link></p>

    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.id">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
    
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      errors: []
    }
  },
  asyncData ({ params }) {
    return axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      return { posts: res.data }
    })
  }
}
</script>

<style scoped>
  .container {
    background: #222;
  }
</style>