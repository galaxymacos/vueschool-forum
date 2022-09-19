import { createApp } from 'vue'
import App from './App.vue' // App.vue is the configuration file for the root component

// createApp is a function that takes a Vue component as configuration file as an argument
// and returns a Vue application instance
// The Vue application instance is then mounted to the DOM element with the id of app

const forumApp = createApp(App)
// ...additional configuration such as

// 1. registering global components
forumApp.component('NiceName', {})
// 2. install plugins
forumApp.use({}) // e.g. Vue Router, Vuex, etc.
// 3. Mount the application to the DOM
forumApp.mount('#app')

// Easy to create a new Vue application instance
const anotherVueApp = createApp(App)
anotherVueApp.component('AnotherComponent', {})
anotherVueApp.use({})
anotherVueApp.mount('#another-app')
