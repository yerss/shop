<template>
  <li>
    <div class="media">
      <a href="#">
        <img alt="" class="mr-3" :src="product.img_url">
      </a>
      <div class="media-body">
        <a href="#">
          <h4>{{product.name}}</h4>
        </a>
        <h4>
          <span>{{product.quantity}} x $ {{product.price}}</span>
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