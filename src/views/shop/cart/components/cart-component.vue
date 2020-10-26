<template>
    <div id="cart_side" class=" add_to_cart right">
        <a href="javascript:void(0)" class="overlay" @click="closeCart()"></a>
        <div class="cart-inner">
            <div class="cart_top">
                <h3>Моя корзина</h3>
                <div class="close-cart">
                    <a href="javascript:void(0)" @click="closeCart()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="cart_media">
                <ul class="cart_product">
                    <product-sidebar
                        v-for="(p, index) in products"
                        :key="index"
                        :product="p"
                    />
                </ul>
                <ul class="cart_total">
                    <li>
                        <div class="total">
                            <h5>Сумма : <span>$ {{total}}</span></h5>
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                          <router-link to="/cart" class="btn btn-normal btn-xs view-cart">Посмотреть корзину</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ProductSidebar from "@/views/shop/cart/components/product-sidebar";
export default {
  name: "cart-component",
  components: {ProductSidebar},
  methods: {
    closeCart() {
      document.getElementById("cart_side").classList.remove('open-side');
    },
  },
  computed: {
    ...mapGetters({
      products: 'cart/products'
    }),
    total () {
      return Math.round(this.products.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.pieces * currentValue.price)
      }, 0))
    }
  }
}
</script>

<style scoped>

</style>