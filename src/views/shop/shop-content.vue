<template>
    <div>
        <shop-slider/>
        <shop-services/>
        <categories-component/>
        <div class="title1 section-my-space">
            <h4>Специальные продукты</h4>
        </div>
        <products-component/>
        <section class="contact-banner contact-banner-inverse">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="contact-banner-contain">
                            <div class="contact-banner-img"><img src="../../assets/images/layout-1/call-img.png" class="  img-fluid" alt="call-banner"></div>
                            <div> <h3>ГОРЯЧАЯЯ ЛИНИЯ</h3></div>
                            <div><h2>123-456-7890</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ShopSlider from "./components/shop-slider";
import ShopServices from "./components/shop-services";
import CategoriesComponent from "./categories/categories-component";
import ProductsComponent from "./special-products/products-component";

export default {
    name: "shop-content",
    components: {
        ProductsComponent,
        CategoriesComponent,
        ShopServices,
        ShopSlider,
    },
}
</script>

<style scoped>

</style>