<template>
  <div class="wrapper">   
    <component v-for="(comp, index) in content" :is="comp.type" :key="index" v-bind="comp.props"></component>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";
import { fetchContentful } from '~/pages/utils.js'
// import { createClient } from '~/plugins/contentful.js'
// const client = createClient()

export default {
  components: {
    ...Components
  },
  data(){
    return {
      content: [],
      metaTags: '',
      title: ''
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: this.title, name: this.title, content: this.metaTags }
      ]
    }
  },
  asyncData({env}) {  
    return fetchContentful('5yNZEBFkjWOBIdQaIzHumK')
    .then(function (res) { 
      return {
        content: res.fields.config,
        metaTags: res.fields.metaTitle,
        title: res.fields.title
      }
    })
    .catch(err => console.log(err))
  }
};
</script>
