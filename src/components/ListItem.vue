<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            <a v-else v-bind:href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
      return this.$store.state.news;
    } else if(name === 'ask') {
      return this.$store.state.ask
    } else {
      return this.$store.state.jobs
    }
    }
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