<template>
    <div>
        <section class="rounded-category">
            <div class="container">
                <div class="row" >
                    <div class="col" >
                        <div class="slide-6 no-arrow">
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/1.png" alt="category  " class="img-fluid">
                                        </div>
                                        <div>
                                            <div  class="btn-rounded">
                                                flower
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/2.png" alt="category " class="img-fluid">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                Furniture
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/3.png" alt="category " class="img-fluid">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                Bag
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/4.png" alt="category" class="img-fluid ">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                Tools
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/5.png" alt="category" class="img-fluid ">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                Grocery
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/6.png" alt="category" class="img-fluid ">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                camera
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="category-contain">
                                    <a href="#">
                                        <div class="img-wrapper">
                                            <img src="../../assets/images/layout-1/rounded-cat/7.png" alt="category" class="img-fluid ">
                                        </div>
                                        <div>
                                            <div class="btn-rounded">
                                                cardigans
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
import slick from '../../assets/js/slick'
export default {
    name: "categories-component",
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