export default {
    SET_NEWS(state, news) { // state라는 인자로 state에 접근 가능, actions에서 response.data로 넘긴 데이터를 news로 받음
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_USER(state, user) {
        state.user = user;
    }
}