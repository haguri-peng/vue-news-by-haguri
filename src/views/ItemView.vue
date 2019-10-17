<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile>
                <div slot="username">
                    User Name: 
                    <router-link v-bind:to="`/user/${userInfo.id}`">
                        {{ userInfo.id }}
                    </router-link>
                </div>
                <template slot="time">
                    {{ 'Posted ' + itemInfo.time_ago }}
                </template>
            </user-profile>

            <!-- <div class="user-container">
                <div>
                    <i class="far fa-user fa-2x"></i>
                </div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${itemInfo.user}`">
                        {{ itemInfo.user }}
                    </router-link>
                    <div class="time">
                        {{ itemInfo.time_ago }}
                    </div>
                </div>
            </div> -->
        </section>

        <!-- 제목 -->
        <section>
            <h2>△ {{ itemInfo.title }}</h2>
        </section>

        <section>
            <!-- 질문 상세 정보 -->
            <div v-html="itemInfo.content"></div>
        </section>
        <!-- <small>
            {{ itemInfo.points }} points by {{ itemInfo.user }} {{ itemInfo.time_ago }} |
            hide | past | web | favorite | {{ itemInfo.comments_count }} comments
        </small>
        <div v-html="itemInfo.content"></div>
        <textarea name="txtArea-test" id="" cols="100" rows="10"></textarea>
        <p>
            <button>add comment</button>
        </p>
        <div class="comment" v-bind:key="comment.id" v-for="comment in itemInfo.comments">
            ▲ {{ comment.user }} {{ comment.time_ago }} <a class="comment-close">[-]</a>
            <span v-html="comment.content"></span>
            <p>
                <a class="comment-reply">reply</a>
            </p>
        </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    // data() {
    //     return {
    //         item: this.$store.state.item
    //     }
    // },
    computed: {
        // #2
        ...mapGetters([
            'itemInfo',
            'userInfo'
        ])

        // #1
        // itemInfo() {
        //     return this.$store.state.item;
        // }
    },
    watch: {
        // item: function(newVal, oldVal) {
        //     console.log(newVal);
        // }
        itemInfo: function(newVal, oldVal) {
            // console.log(newVal);
            // console.log(oldVal);
            this.$store.dispatch('FETCH_USER', newVal.user);
        }
    },
    created() {
        // console.log(this.$route);
        // console.log(this.$route.query.id);

        const itemId = this.$route.query.id;
        this.$store.dispatch('FETCH_ITEM', itemId);

        // console.log(this.$store.state.item);
    },
    components: {
        UserProfile
    }
};
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description {
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }
</style>