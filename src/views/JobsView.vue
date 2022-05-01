<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <div class="points">
          {{ job.points || 0 }} <!-- point가 없으면 0으로 -->
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
           {{ job.time_ago }} by 
           <!-- <router-link :to="`/user/${job.user}`" class="link-text">{{ job.domain }}</router-link> -->
           <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
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