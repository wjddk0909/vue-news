<template>
  <div id="app">
    <button @click="loginUser">login</button>
    <h1>List</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
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
