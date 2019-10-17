<template>
    <div>
        <list-item></list-item>

        <!-- <ul class="news-list">
            <li v-bind:key="item.id" v-for="item in fetchedAsk" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <router-link v-bind:to="item.url">{{ item.title }}</router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul> -->
    </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
    components: {
        ListItem
    }

    // // data() {
    // //     return {
    // //         ask: []
    // //     }
    // // },
    // computed: {
    //     // #4
    //     ...mapGetters([
    //         'fetchedAsk'
    //     ])

    //     // #3
    //     // ...mapGetters({
    //     //     askItems: 'fetchedAsk'
    //     // })

    //     // #2
    //     // ...mapState({
    //     //     ask: state => state.ask
    //     // })

    //     // #1
    //     // ask() {
    //     //     return this.$store.state.ask;
    //     // }
    // },
    // created() {
    //     this.$store.dispatch('FETCH_ASK');

    //     // fetchAskList()
    //     //     .then(response => this.ask = response.data)
    //     //     .catch(error => console.log(error));
    // }
}
</script>

<style>

</style>