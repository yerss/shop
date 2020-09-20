<template>
 <div class="bg-light">
     <loader v-if="isLoad"/>
     <shop-header/>
     <router-view/>
     <shop-footer/>
 </div>
</template>

<script>
import ShopHeader from './shop-header'
import ShopFooter from './shop-footer'
import loader from './loader'

export default {
    name: "main-layout",
    data () {
        return {
            isLoad: true,
        }
    },
    components: {
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