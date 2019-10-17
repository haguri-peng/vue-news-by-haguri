import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
} from '../api/index';

export default {
    // // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             // console.log(response.data);
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => console.error(error));
    // },
    // async
    async FETCH_NEWS(context) {
        try {
            const newsList = await fetchNewsList();
            context.commit('SET_NEWS', newsList.data);
            return newsList;
        } catch (error) {
            console.error(error);
        }
    },
    // // promise
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => console.error(error));
    // },
    async FETCH_ASK({ commit }) {
        try {
            const askList = await fetchAskList();
            commit('SET_ASK', askList.data);
            return askList;
        } catch (error) {
            console.error(error);
        }
    },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => console.error(error));
    // },
    async FETCH_JOBS({ commit }) {
        try {
            const jobList = await fetchJobsList();
            commit('SET_JOBS', jobList.data);
            return jobList;
        } catch (error) {
            console.error(error);
        }
    },
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(error => console.error(error));
    // },
    async FETCH_USER({ commit }, name) {
        try {
            const userInfo = await fetchUserInfo(name);
            commit('SET_USER', userInfo.data);
            return userInfo;
        } catch (error) {
            console.error(error);
        }
    },
    // FETCH_ITEM({ commit }, itemId) {
    //     return fetchItemInfo(itemId)
    //         .then(({ data }) => {
    //             commit('SET_ITEM', data);
    //         })
    //         .catch(error => console.error(error));
    // },
    async FETCH_ITEM({ commit }, itemId) {
        try {
            const itemInfo = await fetchItemInfo(itemId);
            commit('SET_ITEM', itemInfo.data);
            return itemInfo;
        } catch (error) {
            console.error(error);
        }
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data);
    //         })
    //         .catch(error => console.error(error));
    // }
    async FETCH_LIST({ commit }, pageName) {
        try {
            const list = await fetchList(pageName);
            commit('SET_LIST', list.data);
            return list;
        } catch (error) {
            console.error(error);
        }
    }
};
