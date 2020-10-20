<template>
  <table class="table cart-table table-responsive-xs">
    <thead>
    <tr class="table-head">
      <th scope="col">image</th>
      <th scope="col">product name</th>
      <th scope="col">price</th>
      <th scope="col">availability</th>
      <th scope="col">action</th>
    </tr>
    </thead>
    <tbody>
        <tr
            v-for="(p, index) in products"
            :key="index"
        >
          <td>
            <a href="#"><img :src="p.image" alt="product" class="img-fluid"></a>
          </td>
          <td><a href="#">{{p.name}}</a>
            <div class="mobile-cart-content row">
              <div class="col-xs-3">
                <p>in stock</p>
              </div>
              <div class="col-xs-3">
                <h2 class="td-color">${{p.price}}</h2></div>
              <div class="col-xs-3">
                <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i> </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2></div>
            </div>
          </td>
          <td>
            <h2>${{p.price}}</h2></td>
          <td>
          <p>in stock</p>
          </td>
          <td>
            <a href="#" class="icon mr-3" @click="deleteItem(p.id)"><i class="ti-close"></i> </a>
            <a href="#" class="cart" @click="addToCart(p)"><i class="ti-shopping-cart"></i> </a>
          </td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "table-list",
  props: {
    products: {
      type: Array
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addProduct'
    }),
    deleteItem(id) {
      this.$store.commit("wishlist/deleteProduct", id)
    }
  }
}
</script>

<style scoped>

</style>