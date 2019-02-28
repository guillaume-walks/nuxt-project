<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
    <nav id="menu">
      <div class="inner">
        <ul class="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="landing.html">Landing</a>
          </li>
          <li>
            <a href="generic.html">Generic</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
          </li>
        </ul>
        <ul class="actions stacked">
          <li>
            <a href="#" class="button primary fit">Get Started</a>
          </li>
          <li>
            <a href="#" class="button fit">Log In</a>
          </li>
        </ul>
      </div>
      <a class="close" href="#menu" @click.prevent="toggle">Close</a>
    </nav>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },
  methods: {
    toggle() {
      const element = document.getElementsByTagName("body")[0];
      element.classList.toggle("is-menu-visible");
    }
  }
};
</script>


<style>
html,
body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  /* background: #222; */
  color: white;
  width: 100vw;
  height: 100vh;
}

a,
a:visited {
  text-decoration: none;
}

.container {
  padding: 60px;
  /* width: 100vw;
  height: 100vh; */
  /* background: #444; */
}

.page-enter-active {
  animation: acrossIn 0.45s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.65s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>

