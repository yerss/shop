<template>
  <li>
    <div class="media">
      <a href="javascript:void(0)">
        <img alt="" class="mr-3" :src="product.image">
      </a>
      <div class="media-body">
        <a href="javascript:void(0)">
          <h4>{{product.alias}}</h4>
        </a>
        <h4>
          <span>{{product.pieces}} x $ {{product.price}}</span>
        </h4>
      </div>
    </div>
    <div class="close-circle" @click="deleteItem()" style="cursor:pointer;">
        <i class="ti-trash" aria-hidden="true" ></i>
    </div>
  </li>
</template>

<script>
export default {
  name: "product-sidebar",
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