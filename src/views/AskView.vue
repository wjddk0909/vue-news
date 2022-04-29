<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div> 
  </div>
</template>

<script>
import { fetchAskList } from '@/api/index.js'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() { // data를 요청할때는 created나 beforeMount에서 많이 함 - 마운트 되고나서 데이터를 요청하면 데이터를 받아와서 데이터 배열에 넣으면 뷰의 리액티비티 시스템때문에 화면이 다시 그려짐
    fetchAskList()
    .then(response => {
      console.log(response.data);
      this.ask = response.data;
    })
    .catch(error => console.log(error))
  }
};
</script>

<style lang="scss" scoped>

</style>