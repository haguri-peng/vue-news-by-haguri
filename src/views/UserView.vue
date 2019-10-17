<template>
    <div>
        <!-- <user-profile :info="userInfo"></user-profile> -->
        <user-profile>
            <div slot="username">
                User Name: {{ userInfo.id }}
            </div>
            <span slot="time">
                {{ 'Joined ' + userInfo.created }}, 
            </span>
            <span slot="karma">
                {{ addComma(userInfo.karma) }}
            </span>
        </user-profile>

        <!-- <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p> -->
    </div>
</template>

<script>
// import axios from 'axios';
import UserProfile from '../components/UserProfile.vue';

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
        // console.log(this.$route);
        // console.log(this.$route.params.id);

        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);

        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => console.log(error));
    },
    methods: {
        addComma(num) {
            const regExp = /\B(?=(\d{3})+(?!\d))/g;
            return (num+"").replace(regExp, ',');
        }
    }
}
</script>

<style>

</style>