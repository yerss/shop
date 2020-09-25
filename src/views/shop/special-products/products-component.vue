<template>
    <section class="product section-pb-space mb--5">
        <div class="custom-container">
            <div class="row">
                <div class="col pr-0">
                    <div class="product-slide-6 no-arrow">
                        <product/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
import slick from '../../../assets/js/slick'
import Product from "./components/product";
export default {
    name: "products-component",
    components: {Product},
    mounted() {
        $(".product-slide-6").slick({
            arrows: true,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
}
</script>

<style scoped>

</style>