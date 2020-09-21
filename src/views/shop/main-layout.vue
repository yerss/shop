<template>
 <div class="bg-light">
     <loader v-if="isLoad"/>
     <shop-header/>
     <router-view/>
     <my-account-component/>
     <cart-component/>
     <wishlist-component/>
     <shop-footer/>
     <product-modal-component/>
 </div>
</template>

<script>
import ShopHeader from './shop-header'
import ShopFooter from './shop-footer'
import loader from './loader'
import MyAccountComponent from "./my-account-component";
import CartComponent from "./cart-component";
import WishlistComponent from "./wishlist-component";
import ProductModalComponent from "./product-modal-component";

export default {
    name: "main-layout",
    data () {
        return {
            isLoad: true,
        }
    },
    components: {
        ProductModalComponent,
        WishlistComponent,
        CartComponent,
        MyAccountComponent,
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

<style >
@import "../../assets/css/slick.css";
@import "../../assets/css/slick-theme.css";
@import "../../assets/css/font-awesome.css";
@import "../../assets/css/themify.css";
@import "../../assets/css/animate.css";
@import "../../assets/css/bootstrap.css";
@import "../../assets/css/color2.css";

</style>