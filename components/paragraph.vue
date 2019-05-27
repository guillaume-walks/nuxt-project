<template>
  <section id>
    <div class="inner">
      <header class="major">
        <h2>{{ title }}</h2>
      </header>
      <p>{{ text }}</p>
      <ul v-if="button" class="actions">
        <li>
<<<<<<< HEAD
          <nuxt-link :to="button.link" class="button next">{{button.label}}</nuxt-link>
          <!-- <a :href="button.link" class="button next">{{ button.label }}</a> -->
=======
          <a :href="button.link" class="button next">{{ button.label || 'see more' }}</a>
>>>>>>> 9d6d7f421b3f459cbecee8a792c6e03c8ec0e93a
        </li>
      </ul>
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
  }
};
</script>

<style>
</style>
