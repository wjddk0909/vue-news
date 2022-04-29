<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    // var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json') // axios는 프로미스 기반
      // .then(function(response) { // 화살표 함수를 안쓰고 function을 쓰면 콜백이 this 바인딩이 현재 뷰 인스턴스를 바라보지 않으므로 var vm = this로 연결을 해줘야함
      //   vm.users = response.data;
      // })
      .then(response => {
        console.log(response);
        this.users = response.data; 
      })
      .catch(error => console.log(error))
  }
};
</script>

<style lang="scss" scoped>

</style>