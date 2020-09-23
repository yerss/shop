<template>
  <section class="cart-section section-big-py-space bg-light">
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

</template>

<script>
import {mapGetters} from 'vuex'
import TableComponent from "@/views/shop/cart/components/table-component";
export default {
  name: "shop-cart",
  components: {TableComponent},

}
</script>

<style scoped>

</style>