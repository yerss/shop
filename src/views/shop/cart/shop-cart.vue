<template>
  <section>
    <section class="cart-section section-big-py-space bg-light" v-if="cart_count > 0">
      <div class="custom-container">
      <div class="row">
        <div class="col-sm-12">
          <table-component/>
        </div>
      </div>
      <div class="row cart-buttons">
        <div class="col-12">
          <router-link to="/shop" class="btn btn-normal">continue shopping</router-link>
          <router-link to="/checkout" class="btn btn-normal ml-3">check out</router-link>
        </div>
      </div>
    </div>
    </section>
    <section v-else>
      <section class="theme-slider section-big-py-space bg-light">
        <div class="custom-container">
          <div class="row">
            <div class="col">
              <div class="slide-1 no-arrow">
                <div>
                  <div class="slider-banner slide-banner-2 p-center">
                    <div class="slider-img">
                    </div>
                    <div class="slider-banner-contain">
                      <div class="sub-contain">
                        <h4></h4>
                        <h1>Корзина ждет, что ее наполнят.</h1>
                        <router-link to="/shop">
                          shop now
                          <i class="fa fa-arrow-circle-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

</template>

<script>
import {mapGetters} from 'vuex'
import TableComponent from "@/views/shop/cart/components/table-component";
export default {
  name: "shop-cart",
  components: {TableComponent},
  computed: {
    ...mapGetters({
      cart_count: 'cart/products_count',
    })
  }
}
</script>

<style scoped>

</style>