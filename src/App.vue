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
            await this.getProducts()
        },
        methods: {
            ...mapActions({
                getUserProfile: 'auth/getCurrentUser',
                getProducts: 'wishlist/getProducts'
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
