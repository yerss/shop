<template>
    <div>
        <div class="product-box">
            <div class="product-imgbox">
                <div class="product-front">
                    <img src="../../../../assets/images/layout-2/product/1.jpg" class="img-fluid  " alt="product">
                </div>
                <div class="product-back">
                    <img src="../../../../assets/images/layout-2/product/a1.jpg" class="img-fluid  " alt="product">
                </div>
                <div class="product-icon icon-inline">
                    <button onclick="openCart()">
                        <i class="ti-bag" ></i>
                    </button>
                    <a href="javascript:void(0)" title="Add to Wishlist">
                        <i class="ti-heart" aria-hidden="true"></i>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                        <i class="ti-search" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="new-label1">
                    <div>new</div>
                </div>
                <div class="on-sale1">
                    on sale
                </div>
            </div>
            <div class="product-detail detail-inline ">
                <div class="detail-title">
                    <div class="detail-left">
                        <div class="rating-star">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <a href="">
                            <h6 class="price-title">
                                reader will be distracted.
                            </h6>
                        </a>
                    </div>
                    <div class="detail-right">
                        <div class="check-price">
                            $ 56.21
                        </div>
                        <div class="price">
                            <div class="price">
                                $ 24.05
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product"
    }
</script>

<style scoped>

</style>