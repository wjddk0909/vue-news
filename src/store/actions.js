import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from '@/api/index.js'
export default {
    FETCH_NEWS(context) { // context라는 인자는 mutations에 접근 할 수 있게 해줌
        return fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
            return response;
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
        .then(({ data }) => {
            commit('SET_ASK', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({ commit }) { // Destructuring var obj = {a:10} var a = obj.a; var {a} = obj;
        return fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error)
        }) 
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    } ,
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    // #2
    FETCH_LIST({ commit }, pageName) {
        // #3 fetchList 라는 api 호출
        return fetchList(pageName) // return을 해줘야 fetchList에 대한 결과가 프로미스로 체이닝 돼서 FETCH_LIST가 ListMixin에서 .then이 될 수 있게 함
            .then(({ data }) => {
                commit('SET_LIST', data)
            })
            .catch(error => {
                console.log(error)
            })
    },
}