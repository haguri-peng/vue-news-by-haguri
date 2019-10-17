<template>
    <div>
        <div class="user-container">
            <div>
                <i class="far fa-user fa-2x"></i>
            </div>
            <div class="user-description">
                <!-- <div>
                    User Name: {{ userInfo.id }}, 
                    Points: {{ addComma(userInfo.karma) }}
                </div> -->
                <slot name="username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                    <!-- Created Time: {{ userInfo.created }} -->
                    <slot name="time">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                    <slot name="karma">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     info: Object
    // },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    methods: {
        addComma(num) {
            const regExp = /\B(?=(\d{3})+(?!\d))/g;
            return (num+"").replace(regExp, ',');
        }
    }
}
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