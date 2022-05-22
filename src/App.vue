<template>
  <div id="app">
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item.index"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { handleException } from './utils/handler.js'

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    loginUser() { 
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (response.data.id === 1) {
            console.log('사용자가 인증되었습니다!')
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
              this.items = response.data
            })
          }
        })
        .catch(error => console.log(error)) 
    },
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // async await : axios로 불러온 data를 response변수에 담아줄 수 있다.
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다!')
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        handleException(error); // 에러처리 공통함수
        console.log(error)
      }
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
