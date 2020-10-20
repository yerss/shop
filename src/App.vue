<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'app',
        components: {},
        async mounted() {
            await this.getUserProfile()
        },
        methods: {
            ...mapActions({
                getUserProfile: 'auth/getCurrentUser'
            })
        }
    }
</script>

<style>
    @import "assets/css/font-awesome.css";

    .crud-button {
        cursor: pointer;
        color: #0dc7ff;
    }
</style>
