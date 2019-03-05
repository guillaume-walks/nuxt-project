<template>
  <section id="banner" class="major" style="background-position: center 0px;">
    <div class="inner">
      <header class="major">
        <h1>{{title}}</h1>
      </header>
      <div class="content">
        <p>{{text}}</p>
        <ul class="actions">
          <li>
            <a href="#one" class="button next scrolly">See More</a>
          </li>
          <!-- option for more buttons -->
          <slot></slot>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Hero"
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
