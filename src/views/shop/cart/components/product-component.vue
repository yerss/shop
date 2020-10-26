<template>
  <tbody>
  <tr>
    <td>
      <a href="javascript:void(0)"><img :src="product.image" alt="cart"  class=" "></a>
    </td>
    <td><a href="javascript:void(0)">{{ product.name }}</a>
      <div class="mobile-cart-content row">
        <div class="col-xs-3">
          <div class="qty-box">
            <div class="input-group">
              <input type="text" name="pieces" class="form-control input-number" v-model="product.pieces">
            </div>
          </div>
        </div>
        <div class="col-xs-3">
          <h2 class="td-color">$ {{product.price}}</h2></div>
        <div class="col-xs-3">
          <h2 class="td-color" @click="deleteItem()"><a href="javascript:void(0)" class="icon"><i class="ti-close"></i></a></h2></div>
      </div>
    </td>
    <td>
      <h2>$ {{product.price}}</h2></td>
    <td>
      <div class="qty-box">
        <div class="input-group">
          <input type="number" name="pieces" class="form-control input-number" v-model="product.pieces">
        </div>
      </div>
    </td>
    <td @click="deleteItem()"><a href="javascript:void(0)" class="icon"><i class="ti-close"></i></a></td>
    <td>
      <h2 class="td-color">$ {{product.pieces * product.price}}</h2></td>
  </tr>
  </tbody>
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
  methods: {
    deleteItem() {
      this.$store.commit("cart/deleteProduct", this.product.id)
    }
  }

}
</script>

<style scoped>

</style>