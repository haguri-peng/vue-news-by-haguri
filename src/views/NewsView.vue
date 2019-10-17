<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';
import bus from '../utils/bus';

export default {
    components: {
        ListItem
    },
    mixins: [ListMixin],
    created() {
        // console.log('NewsView Created!!');
        // bus.$emit('start:spinner');
        // bus.$emit('end:spinner');
    },
    // mounted() {
    //     bus.$emit('end:spinner');
    // }
}
</script>

<style>

</style>