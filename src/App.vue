<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <page-home></page-home> <!-- Using component defined in the <script> section -->
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
