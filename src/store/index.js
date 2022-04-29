import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    mutations: {
        SET_NEWS(state, news) { // state라는 인자로 state에 접근 가능, actions에서 response.data로 넘긴 데이터를 news로 받음
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) { // context라는 인자는 mutations에 접근 할 수 있게 해줌
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error)
            })
        },
        FETCH_ASK(context) {
            fetchAskList()
            .then(response => {
                context.commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS({ commit }) { // Destructuring var obj = {a:10} var a = obj.a; var {a} = obj;
            fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
});