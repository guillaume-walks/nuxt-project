<template>
  <div class="wrapper">
   
    <component v-for="(comp, index) in content" :is="comp.type" :key="index" v-bind="comp.props"></component>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    ...Components
  },
  data(){
    return {
      content: []
    }
  },
  asyncData({env}) {  
    return client.getEntry('5yNZEBFkjWOBIdQaIzHumK', {include: 5})
      .then(entry => {
        return {
          content: entry.fields.config
        }
      })
      .catch(err => console.log(err));
  }
};
</script>
