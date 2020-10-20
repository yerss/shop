<template>
  <section>
    <table class="table cart-table table-responsive-xs">
      <thead>
      <tr class="table-head">
        <th scope="col">image</th>
        <th scope="col">product name</th>
        <th scope="col">price</th>
        <th scope="col">quantity</th>
        <th scope="col">action</th>
        <th scope="col">total</th>
      </tr>
      </thead>
      <product-component
              v-for="(p, index) in products"
              :product="p"
              :key="index"
      />
    </table>
    <table class="table cart-table table-responsive-md">
      <tfoot>
      <tr>
        <td>total price :</td>
        <td>
          <h2>$ {{ total }}</h2></td>
      </tr>
      </tfoot>
    </table>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductComponent from "@/views/shop/cart/components/product-component";
export default {
name: "table-component",
  components: {ProductComponent},
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