<template>
    <div>
        <user-profile></user-profile>
        <!-- <p>name: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>crated: {{ userInfo.created }}</p> -->
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'

export default {
    components: {
        UserProfile
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        console.log(userName);
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); // 이렇게 할 수도 있겠지만 스토어를 이용하기
        this.$store.dispatch('FETCH_USER', userName); // payload(인자)가 여러개일때는 객체로 감싸야 함
    }
};
</script>

<style lang="scss" scoped>

</style>