<template>
    <section>
        <section class="about-page section-big-py-space">
            <div class="custom-container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="banner-section"><img src="../../../assets/images/blog/1.jpg" class="img-fluid   w-100" alt=""></div>
                    </div>
                    <div class="col-lg-6">
                        <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h4>
                        <p class="mb-2"> Sed ut perspiciatis unde omnis iste natus <b>error sit</b> voluptatem accusantium doloremque laudantium,</p>
                        <p class="mb-2"> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                        <p class="mb-2">  These <b>cases</b> are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our</p>
                        <p> being able to do what we like best, every pleasure is to be <b>welcomed</b> and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid <b>worse</b> pains.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonial testimonial-inverse">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="slide-1">
                            <div>
                                <div class="testimonial-contain">
                                    <div class="media">
                                        <div class="testimonial-img">
                                            <img src="../../../assets/images/testimonial/1.jpg" class="img-fluid rounded-circle  " alt="testimonial">
                                        </div>
                                        <div class="media-body">
                                            <h5>mark jecno</h5>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="testimonial-contain">
                                    <div class="media">
                                        <div class="testimonial-img">
                                            <img src="../../../assets/images/testimonial/2.jpg" class="img-fluid rounded-circle" alt="testimonial">
                                        </div>
                                        <div class="media-body">
                                            <h5>mark jecno</h5>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="testimonial-contain">
                                    <div class="media">
                                        <div class="testimonial-img">
                                            <img src="../../../assets/images/testimonial/3.jpg" class="img-fluid rounded-circle" alt="testimonial">
                                        </div>
                                        <div class="media-body">
                                            <h5>mark jecno</h5>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="team" class="team section-big-py-space ratio_asos">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>Our Team</h2>
                                <div class="team-4">
                                    <div>
                                        <div>
                                            <img src="../../../assets/images/about/team/1.jpg" class="img-fluid  bg-img" alt="team">
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="../../../assets/images/about/team/2.jpg" class="img-fluid  bg-img" alt="team">
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="../../../assets/images/about/team/3.jpg" class="img-fluid  bg-img" alt="team">
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="../../../assets/images/about/team/4.jpg" class="img-fluid  bg-img" alt="team">
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="../../../assets/images/about/team/5.jpg" class="img-fluid  bg-img" alt="team">
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
    import $ from 'jquery'
    import slick from '../../../assets/js/slick'
    export default {
        name: "about-us-component",
        mounted() {
            $('.slide-1 ').slick({
                autoplay: false,
                autoplaySpeed: 2500,
            });
            $('.team-4').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 586,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>