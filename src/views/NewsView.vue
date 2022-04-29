<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    // .then(response => {
    //   console.log(response.data);
    //   this.users = response.data; 
    // })
    // .catch(error => console.log(error))
  }
};
</script>

<style lang="scss" scoped>

</style>