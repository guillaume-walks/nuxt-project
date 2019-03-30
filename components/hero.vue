<template>
  <!-- <section
    id="banner"
    class="major"
    :style="'background-image: url(' + backgroundImg + '); background-position: center 0px;'"
  >-->
  <section id="banner" class="major" v-lazy:background-image="img">
    <div class="inner">
      <header class="major">
        <h1>{{title}}</h1>
      </header>
      <div class="content">
        <p>{{text}}</p>
        <ul class="actions">
          <li>
            <a @click="scrollTo" class="button next scrolly">See More</a>
          </li>
          <!-- option for more buttons -->
          <slot></slot>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CustomScroll from "./utils/scrollTo";
// import Vue from "vue";
// import VueLazyload from "vue-lazyload";
// Vue.use(VueLazyload);

export default {
  data() {
    return {
      img: {
        src: "/images/code.jpg",
        error: "/images/banner.jpg",
        loading: "/images/loading.gif"
      }
    };
  },
  computed: {
    // img() {
    //   return {
    //     src: "/images/code.jpg",
    //     error: "/images/banner.jpg",
    //     loading: "/images/loading.gif"
    //   };
    // }
  },
  methods: {
    scrollTo() {
      const dest = document.querySelectorAll("section")[1];
      if (!dest) {
        return;
      }
      CustomScroll(dest, 750, "easeOutQuad", () =>
        console.log(`Just finished scrolling to ${window.pageYOffset}px`)
      );
    }
  },
  props: {
    title: {
      type: String,
      default: "Hero"
    },
    backgroundImg: {
      type: String,
      default: "/_nuxt/assets/images/code.jpg"
    },
    text: {
      type: String,
      default: `A responsive site template designed by HTML5 UP
          and released under the Creative Commons.`
    }
  }
};
</script>

<style>
</style>
