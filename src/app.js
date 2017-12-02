import Vue from 'vue'

const app = new Vue({
  data: {
    message: 'Hello, there! express.js is serving Vue!'
  },
  template: "<div id='app'>{{ message }}</div>"
})

export { app }
