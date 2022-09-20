<template>
  <div class="container">
    <page-home/> <!-- Using component defined in the <script> section -->
  </div>
</template>

<script>
import PageHome from '@/components/PageHome.vue' // Import custom components from file
export default {
  name: 'App',
  components: {
    PageHome // Make custom components available in Vue
  }
}
</script>

<style>
/* Import CSS from src, and the Vue-CLI css-loaders made it lighter (about 25%) */
@import "assets/style.css";
/* Import third-party CSS from node_modules */
/*@import "~bootstrap/dist/css/bootstrap.css";*/
</style>
