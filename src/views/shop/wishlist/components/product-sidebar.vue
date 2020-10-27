<template>
  <li>
    <div class="media">
      <a href="#">
        <img alt="" class="mr-3" :src="product.image">
      </a>
      <div class="media-body">
        <a href="#">
          <h4>{{product.alias}}</h4>
        </a>
        <h4>
          <span>$ {{product.price}}</span>
        </h4>
      </div>
    </div>
    <div class="close-circle" style="cursor: pointer" @click="deleteItem(product.id)">
      <i class="ti-trash" aria-hidden="true"></i>
    </div>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "product-sidebar",
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      deleteItem: 'wishlist/deleteProduct'
    })
  }
}
</script>

<style scoped>

</style>