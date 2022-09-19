<template>  <!-- template must not be empty -->
  <div>Hello from page home.</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{thread.title}}</h2>
    <div v-for="postId in thread.posts" :key="postId">  <!-- key should be unique -->
      <p>{{ userById(postById(postId).userId).name}}</p>  <!-- refer data or methods in {{ }} -->
      <p>{{ posts.find(p => p.id === postId).text }}</p>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data () { // import data from json file
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: { // create methods to access data using "this"
    postById (postId) {
      return this.posts.find(p => p.id === postId) // refer data using "this.DATA_NAME"
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
