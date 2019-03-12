<template>
  <!-- <article :style="`background-image: url(${info.url});`"> -->
  <article :style="`background-image: url(${rand()});`">
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
    info: {
      required: true
    },
    callback: {
      type: Function
    }
  },
  methods: {
    rand() {
      const t = Math.floor(Math.random() * 100);
      return `https://picsum.photos/500/500?image=${t}`;
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style>
</style>
