<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
           {{ item.time_ago }} by <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
// import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';

export default {
  components: {
    ListItem,
  }
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
};
</script>

<style lang="scss" scoped>
// .news-list {
//   margin: 0;
//   padding: 0;

//   .post {
//     list-style: none;
//     display: flex;
//     align-items: center;
//     border-bottom: 1px solid #eee;

//     .points {
//       width: 80px;
//       height: 60px;
//       display: flex;
//       align-items: center; // (flex)세로 중앙 정렬
//       justify-content: center; // (flex)가로 중앙 정렬
//       color: #42b883
//     }

//     .news-title {
//       margin: 0;
//     }

//     .link-text {
//       color: #828282
//     }
//   }
// }
</style>