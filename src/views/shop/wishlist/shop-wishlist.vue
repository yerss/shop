<template>
    <section class="wishlist-section section-big-py-space bg-light">
        <div class="custom-container">
            <div class="row">
                <div class="col-sm-12">
                    <table-list :products="products"/>
                </div>
            </div>
            <div class="row wishlist-buttons">
                <div class="col-12">
                    <router-link to="/shop" class="btn btn-normal">Продолжить покупки</router-link>
                    <router-link to="/checkout" class="btn btn-normal">Оформить заказ</router-link>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import TableList from "@/views/shop/wishlist/components/tablelist";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "shop-wishlist",
        components: {TableList},
        async created() {
        },
        computed: {
            ...mapGetters({
                products: 'wishlist/products'
            })
        },
        methods: {
            ...mapActions({})
        }
    }
</script>

<style scoped>

</style>