<template>
    <div id="wishlist_side" class="add_to_cart right">
        <a href="javascript:void(0)" class="overlay" @click="closeWishlist()"></a>
        <div class="cart-inner">
            <div class="cart_top">
                <h3>my wishlist</h3>
                <div class="close-cart">
                    <a href="javascript:void(0)" @click="closeWishlist()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="cart_media">
                <ul class="cart_product">
                    <li>
                        <div class="media">
                            <a href="#">
                                <img alt="" class="mr-3" src="../../../assets/images/layout-1/media-banner/1.jpg">
                            </a>
                            <div class="media-body">
                                <a href="#">
                                    <h4>item name</h4>
                                </a>
                                <h4>
                                    <span>sm</span>
                                    <span>, blue</span>
                                </h4>
                                <h4>
                                    <span>$ 299.00</span>
                                </h4>
                            </div>
                        </div>
                        <div class="close-circle">
                            <a href="#">
                                <i class="ti-trash" aria-hidden="true"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <a href="#">
                                <img alt="" class="mr-3" src="../../../assets/images/layout-1/media-banner/2.jpg">
                            </a>
                            <div class="media-body">
                                <a href="#">
                                    <h4>item name</h4>
                                </a>
                                <h4>
                                    <span>sm</span>
                                    <span>, blue</span>
                                </h4>
                                <h4>
                                    <span>$ 299.00</span>
                                </h4>
                            </div>
                        </div>
                        <div class="close-circle">
                            <a href="#">
                                <i class="ti-trash" aria-hidden="true"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <a href="#"><img alt="" class="mr-3" src="../../../assets/images/layout-1/media-banner/3.jpg"></a>
                            <div class="media-body">
                                <a href="#"><h4>item name</h4></a>
                                <h4>
                                    <span>sm</span>
                                    <span>, blue</span>
                                </h4>
                                <h4><span>$ 299.00</span></h4>
                            </div>
                        </div>
                        <div class="close-circle">
                            <a href="#">
                                <i class="ti-trash" aria-hidden="true"></i>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="cart_total">
                    <li>
                        <div class="total">
                            <h5>subtotal : <span>$299.00</span></h5>
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                          <router-link to="/wishlist" class="btn btn-normal btn-block  view-cart">view wislist</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wishlist-component",
        methods: {
            closeWishlist() {
                document.getElementById("wishlist_side").classList.remove('open-side');
            },
        }
    }
</script>

<style scoped>

</style>