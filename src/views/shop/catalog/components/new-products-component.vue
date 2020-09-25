<template>
    <div class="theme-card creative-card creative-inner">
        <h5 class="title-border">new product</h5>
        <div class="offer-slider slide-1">
            <new-product/>
            <new-product/>
            <new-product/>
        </div>
    </div>
</template>

<script>
    import NewProduct from "@/views/shop/catalog/components/new-product";
    export default {
        name: "new-products-component",
      components: {NewProduct}
    }
</script>

<style scoped>

</style>