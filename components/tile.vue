<template>
  <article v-lazy:background-image="rand()">
    <span class="image" style="display: none;">
      <img :src="info.url" alt>
    </span>
    <header class="major">
      <h3>
        <a class="link">{{ info.name }}</a>
      </h3>
      <p>{{ info.email }} {{ info.date }}</p>
    </header>
    <a class="link primary"></a>
  </article>
</template>

<script>
export default {
  props: {
    info: Object,
    // url: String,
    // email: String,
    // name: String,
    // date: String,
    callback: {
      type: Function
    }
  },
  methods: {
    rand() {      
      const t = Math.floor(Math.random() * 100);
      const img = this.info.url ? this.info.url : `https://picsum.photos/500/500?image=${t}`;
      return {
        src: img,
        error: "/images/banner.jpg",
        loading: "/images/loading.gif"
      };
    }
  },
  created() {
    // console.log(this);
  }
};
</script>

<style>
</style>
