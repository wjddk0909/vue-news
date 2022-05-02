<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
        <!-- <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} 
          by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    created() {
    // this.$store.dispatch('FETCH_NEWS');
    console.log(this.$route.path === '/news'); 
    const name = this.$route.name;
    if(name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if(name === 'ask') {
      this.$store.dispatch('FETCH_ASK');
    } else if(name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
.news-list {
  margin: 0;
  padding: 0;

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

    .points {
      width: 80px;
      height: 60px;
      display: flex;
      align-items: center; // (flex)세로 중앙 정렬
      justify-content: center; // (flex)가로 중앙 정렬
      color: #42b883
    }

    .news-title {
      margin: 0;
    }

    .link-text {
      color: #828282
    }
  }
}
</style>