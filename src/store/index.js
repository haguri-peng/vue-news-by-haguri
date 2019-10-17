import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
        list: []
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        itemInfo(state) {
            return state.item;
        },
        userInfo(state) {
            return state.user;
        }
    },
    mutations,
    actions
});
