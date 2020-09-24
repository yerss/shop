<template>
    <div id="wishlist_side" class="add_to_cart right">
        <a href="javascript:void(0)" class="overlay" @click="closeWishlist()"></a>
        <div class="cart-inner">
            <div class="cart_top">
                <h3>my wishlist</h3>
                <div class="close-cart">
                    <a href="javascript:void(0)" @click="closeWishlist()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="cart_media">
                <ul class="cart_product">
                    <product-sidebar
                        v-for="(p, index) in products"
                        :product="p"
                        :key="index"
                    />
                </ul>
                <ul class="cart_total">
                    <li>
                        <div class="total">
                            <h5>subtotal : <span>$ {{total}}</span></h5>
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                          <router-link to="/wishlist" class="btn btn-normal btn-block  view-cart">view wislist</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ProductSidebar from "@/views/shop/cart/components/product-sidebar";
import {mapGetters} from "vuex";
export default {
  name: "wishlist-component",
  components: {ProductSidebar},
  methods: {
    closeWishlist() {
      document.getElementById("wishlist_side").classList.remove('open-side');
    },
  },
  computed: {
    ...mapGetters({
      products: 'wishlist/products'
    }),
    total () {
      return Math.round(this.products.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price)
      }, 0))
    }
  }
}
</script>

<style scoped>

</style>