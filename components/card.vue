<template>
  <div @click="() => this.callback(this.info)" class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ info.name }}</p>
          <p class="subtitle is-6">{{ info.email }}</p>
        </div>
      </div>

      <div class="content">
        <p>{{ info.description }}</p>
        <a>@bulmaio</a>.
        <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">{{ info.date }}</time>
      </div>
    </div>
  </div>
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
  created() {
    console.log(this);
  }
};
</script>
