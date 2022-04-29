<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api/index.js'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    console.log('호출 전: ', this); // 호출 전 VueComponent
    fetchNewsList()
    // .then(function(response) {
    //   console.log(response.data);
    //   console.log('호출 후: ', this); // 호출 후 undefined
    // })
    .then(response => {
      console.log(response.data);
      console.log('호출 후: ', this); // 호출 후 VueComponent
      this.users = response.data; 
    })
    .catch(error => console.log(error))
  }
};
</script>

<style lang="scss" scoped>

</style>