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
  watchQuery: true,
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

    const page = '3kw0QgZtzCFw3P2MiYwpIP'
    return fetchContentful(page)
      .then((res) => { 
        console.log(res)
        const el = res.fields.pageStructure
        let obj = []
        for (var i in el) {
          obj[i] = {
            type: el[i].fields.type,
            props: el[i].fields.items.map(e => e.fields)
          }
        }
        console.log(obj)

      }).catch(err => console.log(err))

    return fetchContentful('5yNZEBFkjWOBIdQaIzHumK')
      .then((res) => { 
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
