<template>
    <div>
        <section class="rounded-category">
            <div class="container">
                <div class="row" >
                    <div class="col" >
                        <div class="slide-6 no-arrow">
                            <category-slider/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
import slick from '../../../assets/js/slick'
import CategorySlider from "@/views/shop/categories/components/category-slider";
export default {
    name: "categories-component",
  components: {CategorySlider},
  mounted() {
        $('.slide-6').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1367,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
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