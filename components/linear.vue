<template>
  <section>
    <a href="generic.html" class="image">
      <img :src="rand()" alt data-position="center center">
    </a>
    <div class="content">
      <div class="inner">
        <header class="major">
          <h3>{{title}}</h3>
        </header>
        <p>{{text}}</p>
        <ul v-if="button" class="actions">
          <li>
            <nuxt-link :to="button.link" class="button next">{{ button.label || 'see more'}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    button: {
      type: [Object, Boolean],
      default: false
    },
    text: {
      type: String,
      default: `Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.`
    },
    title: {
      type: String,
      default: "Orci maecenas"
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    rand() {
      const t = Math.floor(Math.random() * 100);
      return `https://picsum.photos/300/350?image=${t}`;
    }
  }
};
</script>

<style>
</style>
