<template>
    <div class="product-wrapper-grid">
        <div class="row">
            <product-component :product="p" v-for="p in products"/>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import slick from "../../../assets/js/slick"
import notify from '../../../assets/js/bootstrap-notify.min'
import ProductComponent from "@/views/shop/catalog-components/product-component";
export default {
  name: "table-component",
  components: {ProductComponent},
  data() {
    return {
      products: [
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          rating: 4,
          img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
          img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
          old_price: 56.21,
          price: 24.15,
          name: 'reader will be distracted.',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
      ]
    }
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