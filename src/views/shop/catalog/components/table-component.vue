<template>
    <div class="product-wrapper-grid">
        <div class="row">
            <product-component
                    :product="p"
                    v-for="(p, index) in products"
                    :key="index"
            />
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import slick from "../../../../assets/js/slick"
import notify from '../../../../assets/js/bootstrap-notify.min'
import ProductComponent from "@/views/shop/catalog/components/product-component";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "table-component",
  components: {ProductComponent},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      products: 'products/products'
    })
  },
  mounted() {
    $('.list-layout-view').on('click', function(e) {
      $('.collection-grid-view').css('opacity', '0');
      $(".product-wrapper-grid").css("opacity","0.2");
      $('.shop-cart-ajax-loader').css("display","block");
      $('.product-wrapper-grid').addClass("list-view");
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-12");
      setTimeout(function(){
        $(".product-wrapper-grid").css("opacity","1");
        $('.shop-cart-ajax-loader').css("display","none");
      }, 500);
    });
    $('.grid-layout-view').on('click', function(e) {
      $('.collection-grid-view').css('opacity', '1');
      $('.product-wrapper-grid').removeClass("list-view");
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-3");

    });
    $('.product-2-layout-view').on('click', function(e) {
      if($('.product-wrapper-grid').hasClass("list-view")) {}
      else{
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-6");
      }
    });
    $('.product-3-layout-view').on('click', function(e) {
      if($('.product-wrapper-grid').hasClass("list-view")) {}
      else{
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-4");
      }
    });
    $('.product-4-layout-view').on('click', function(e) {
      if($('.product-wrapper-grid').hasClass("list-view")) {}
      else{
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-3");
      }
    });
    $('.product-6-layout-view').on('click', function(e) {
      if($('.product-wrapper-grid').hasClass("list-view")) {}
      else{
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-2");
      }
    });
  }
}
</script>

<style scoped>

</style>