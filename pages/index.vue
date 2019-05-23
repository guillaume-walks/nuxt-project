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
import { async } from 'q';

const client = createClient()

const test = () => {
  console.log(test)
}
async function buildPage (uid) {
  const page = await getEntry(uid)

  console.log(page)
  const request = buildStack(page, [])
  console.log(request)
}
const buildStack = (obj, list) => {
  for (var i in obj) {
    console.log(i, obj[i])
    if (i === 'sys') {
      list = list.concat(obj[i].id)
    } else {
      for (var j in obj[i]) {
        if (Array.isArray(obj[i][j])) {
          buildStack(obj[i][j], list)
        }
      }      
    }
  }
  return list
}
async function getEntry (uid) {
  const promise = new Promise((resolve, reject) => {
    client.getEntry(uid)
      .then(entry => resolve(entry))
      .catch(err => resolve(err));
  })   
  return promise   
}

export default {
  components: {
    ...Components
  },
  asyncData({env}) {  
    console.log(test)
    buildPage('3kw0QgZtzCFw3P2MiYwpIP')
      // client.getEntry('3kw0QgZtzCFw3P2MiYwpIP')
      //   .then(entry => console.log(entry))
      //   .catch(err => console.log(err));
  }
};
</script>
