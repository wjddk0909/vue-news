<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile :info="fetchedItem">
                <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <div slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</div>
            </user-profile>
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>
        <!-- <p>{{ fetchedItem.title }}</p>
        <p>{{ fetchedItem.content }}</p> -->
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        UserProfile,
    },
    computed: {
        // itemInfo() {
        //     return this.$store.state.item;
        // }
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
};
</script>

<style lang="scss" scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    .fa-user {
        font-size: 2.5rem;
    }

    .user-description {
        padding-left: 8px;
    }

    .time {
        font-size: 0.7rem;
    }
}
</style>