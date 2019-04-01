<template>
  <div class="wrapper">
    <Hero title="About..."/>
    <Paragraph/>
    <Sidemenu/>

    <Search/>
  </div>
</template>

<script>
import * as Components from "~/components/utils/importAll";
export default {
  components: {
    ...Components
  }
};
</script>
