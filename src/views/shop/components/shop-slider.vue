<template>
    <section class="theme-slider b-g-white " id="theme-slider">
        <div class="custom-container">
            <div class="row">
                <div class="col">
                    <div class="slide-1 no-arrow">
                        <div>
                            <div class="slider-banner p-center slide-banner-1">
                                <div class="slider-img">
                                    <ul class="layout1-slide-1">
                                        <li id="img-1"><img src="../../../assets/images/layout-2/slider/1.3.png" class="img-fluid" alt="slider"></li>
                                        <li id="img-2" class="slide-center"><img src="../../../assets/images/layout-2/slider/1.5.png" class="img-fluid" alt="slider"></li>
                                    </ul>
                                </div>
                                <div class="slider-banner-contain">
                                    <div>
                                        <h1>mi<span>Mobile</span></h1>
                                        <h4>Быстрый и легкий</h4>
                                        <h2>Pixel Perfect Deal Camera</h2>
                                        <a class="btn btn-normal">
                                            КУПИТЬ СЕЙЧАС
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="slider-banner p-center slide-banner-1">
                                <div class="slider-img">
                                    <ul class="layout1-slide-2">
                                        <li id="img-3" class="slide-center"><img src="../../../assets/images/layout-2/slider/2.1.png" class="img-fluid" alt="slider"></li>
                                        <li id="img-4" class="slide-center"><img src="../../../assets/images/layout-2/slider/2.2.png" class="img-fluid" alt="slider"></li>
                                    </ul>
                                </div>
                                <div class="slider-banner-contain">
                                    <div>
                                        <h1>Большие<span>скидки</span></h1>
                                        <h4>Цены от $99</h4>
                                        <h2>50% скидки</h2>
                                        <a class="btn btn-normal">
                                            Купить сейчас
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="slider-banner p-center slide-banner-1">
                                <div class="slider-img">
                                    <ul class="layout1-slide-3">
                                        <li id="img-5"><img src="../../../assets/images/layout-2/slider/3.2.png" class="img-fluid" alt="slider"></li>
                                        <li id="img-6" class="slide-center"><img src="../../../assets/images/layout-2/slider/3.1.png" class="img-fluid" alt="slider"></li>
                                    </ul>
                                </div>
                                <div class="slider-banner-contain">
                                    <div>
                                        <h1>camera<span></span></h1>
                                        <h4>Прямо сейчас от $79</h4>
                                        <h2>70% скидки сегодня</h2>
                                        <a class="btn btn-normal">
                                             Купить сейчас
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
export default {
    name: "shop-slider",
    mounted() {
        $('.slide-1 ').slick({
            autoplay: false,
            autoplaySpeed: 2500,
        });
    },
    methods: {

    }
}
</script>

<style scoped>

</style>