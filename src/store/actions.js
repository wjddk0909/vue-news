import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo } from '@/api/index.js'
export default {
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
    FETCH_ASK({ commit }) {
        fetchAskList()
        .then(({ data }) => {
            commit('SET_ASK', data);
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
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    } 
}