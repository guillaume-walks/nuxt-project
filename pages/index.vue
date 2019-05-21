<template>
  <div class="wrapper">
    <Hero title="Home page..."/>
    <div class="major">
      <div class="inner">
        <p>
          <nuxt-link to="/product/">Product page</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/contact">contact page</nuxt-link>
        </p>
      </div>
    </div>
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
  asyncData({env}) {
      client.getEntry('34MlmiuMgU8wKCOOIkAuMy')
        .then(entry => console.log(entry))
        .catch(err => console.log(err));
  }
};
</script>
