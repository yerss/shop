<template>
    <div class="bg-light">
        <loader v-if="isLoad"/>
        <shop-header/>
        <breadcrumb-component/>
        <router-view/>
        <cart-component/>
        <wishlist-component/>
        <shop-footer/>
        <product-modal-component/>
    </div>
</template>

<script>
    import ShopHeader from './components/shop-header'
    import ShopFooter from './components/shop-footer'
    import loader from './loader'
    import CartComponent from "./cart/components/cart-component";
    import WishlistComponent from "./wishlist/wishlist-component";
    import BreadcrumbComponent from "@/views/shop/components/breadcrumb-component";
    import ProductModalComponent from "./cart/components/product-modal-component";
    import $ from 'jquery'
    export default {
        name: "main-layout",
        data() {
            return {
                isLoad: true,
            }
        },
        components: {
            ProductModalComponent,
            BreadcrumbComponent,
            WishlistComponent,
            CartComponent,
            ShopHeader,
            ShopFooter,
            loader,
        },
        mounted() {
            this.activate()
        },
        methods: {
            activate() {
                setTimeout(() => this.isLoad = false, 1500);
            }
        }
    }
</script>

<style>
    @import "../../assets/css/slick.css";
    @import "../../assets/css/slick-theme.css";
    @import "../../assets/css/themify.css";
    @import "../../assets/css/animate.css";
    @import "../../assets/css/bootstrap.css";
    @import "../../assets/css/color2.css";

</style>