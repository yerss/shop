<template>
  <li>
    <div class="media">
      <a href="#">
        <img alt="" class="mr-3" :src="product.image">
      </a>
      <div class="media-body">
        <a href="#">
          <h4>{{product.name}}</h4>
        </a>
        <h4>
          <span>{{product.pieces}} x $ {{product.price}}</span>
        </h4>
      </div>
    </div>
    <div class="close-circle" style="cursor: pointer" @click="deleteItem()">
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
    deleteItem() {
      this.$store.commit("wishlist/deleteProduct", this.product.id)
    },
    ...mapActions({
      // implement delete method for wishlist
    })
  }
}
</script>

<style scoped>

</style>