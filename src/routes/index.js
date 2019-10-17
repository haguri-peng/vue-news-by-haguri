import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'news'
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: url 주소로 갔을 때, 표시될 component
            component: NewsView,
            // component: createListView('NewsView')
            beforeEnter: (to, from, next) => {
                // console.log(to);
                // console.log(from);
                // console.log(next);

                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error => console.error(error));
            }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: AskView
            component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView
            component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
});
