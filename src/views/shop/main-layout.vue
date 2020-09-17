<template>
<!--    <div class="loader-wrapper">-->
<!--      <div>-->
<!--        <img src="../../assets/images/loader.gif" alt="loader">-->
<!--      </div>-->
<!--    </div>-->
 <div>
   <shop-header/>
   <div style="height: 500px">

   </div>
   <shop-footer/>
 </div>
</template>

<script>
import ShopHeader from './shop-header'
import ShopFooter from './shop-footer'
export default {
  name: "main-layout",
  components: {
    ShopHeader,
    ShopFooter
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