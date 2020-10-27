<template>
  <section>
    <table class="table cart-table table-responsive-xs">
      <thead>
      <tr class="table-head">
        <th scope="col"></th>
        <th scope="col">Наименование</th>
        <th scope="col">Цена</th>
        <th scope="col">Количество</th>
        <th scope="col">Действие</th>
        <th scope="col">Сумма</th>
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
        <td>Сумма :</td>
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