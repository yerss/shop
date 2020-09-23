<template>
  <div class="col-xl-3 col-md-4 col-6  col-grid-box">
    <div class="product">
      <div class="product-box">
        <div class="product-imgbox">
          <div class="product-front">
            <img :src="product.img_url" class="img-fluid  " alt="product">
          </div>
          <div class="product-back">
            <img :src="product.img_url2" class="img-fluid  " alt="product">
          </div>
        </div>
        <div class="product-detail detail-center ">
          <div class="detail-title">
            <div class="detail-left">
<!--              <div>-->
<!--                <i class="fa fa-star" style="color: #ffa800"></i>-->
<!--                <i class="fa fa-star" style="color: #ffa800"></i>-->
<!--                <i class="fa fa-star" style="color: #ffa800"></i>-->
<!--                <i class="fa fa-star" style="color: #ffa800"></i>-->
<!--                <i class="fa fa-star" style="color: #aaaaaa"></i>-->
<!--              </div>-->
              <b-form-rating :value="product.rating" color="#ffa800" no-border></b-form-rating>
              <p>{{product.description}}</p>
              <a href="">
                <h6 class="price-title">
                  {{product.name}}
                </h6>
              </a>
            </div>
            <div class="detail-right">
              <div class="check-price">
                $ {{product.old_price}}
              </div>
              <div class="price">
                <div class="price">
                  $ {{product.price}}
                </div>
              </div>
            </div>
          </div>
          <div class="icon-detail">
            <button data-toggle="modal" data-target="#addtocart" title="Add to cart" @click="addToCart(product)">
              <i class="ti-bag" ></i>
            </button>
            <a href="javascript:void(0)" title="Add to Wishlist">
              <i class="ti-heart" aria-hidden="true"></i>
            </a>
            <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
              <i class="ti-search" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "product-component",
  props: {
    product: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addProduct'
    })
  }
}
</script>

<style scoped>

</style>