<template>
    <div class="col-xl-3 col-md-4 col-6  col-grid-box">
        <div class="product">
            <div class="product-box">
                <div class="product-imgbox">
                    <div class="product-front">
                        <img :src="product.image" class="img-fluid  " alt="product">
                    </div>
                    <div class="product-back">
                        <img :src="product.image" class="img-fluid  " alt="product">
                    </div>
                </div>
                <div class="product-detail detail-center ">
                    <div class="detail-title">
                        <div class="detail-left">
                            <div>
                                <i class="fa fa-star" style="color: #ffa800"></i>
                                <i class="fa fa-star" style="color: #ffa800"></i>
                                <i class="fa fa-star" style="color: #ffa800"></i>
                                <i class="fa fa-star" style="color: #ffa800"></i>
                                <i class="fa fa-star" style="color: #aaaaaa"></i>
                            </div>
                            <!--              <b-form-rating :value="product.rating" color="#ffa800" no-border></b-form-rating>-->
                            <p>{{product.description}}</p>
                            <a href="">
                                <h6 class="price-title">
                                    {{product.alias}}
                                </h6>
                            </a>
                        </div>
                        <div class="detail-right">
                            <div class="check-price">
                                $ {{product.price + product.price/10}}
                            </div>
                            <div class="price">
                                <div class="price">
                                    $ {{product.price}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="icon-detail">
                        <button data-toggle="modal" data-target="#addtocart" title="Добавить в корзину"
                                @click="addToCart(product)">
                            <i class="ti-bag"></i>
                        </button>
                        <a @click="addToWishlist(product)" href="javascript:void(0)" title="Добавить в хочу">
                            <i class="ti-heart" aria-hidden="true"></i>
                        </a>
                        <a @click.prevent="quickView(product)" href="javascript:void(0)" data-toggle="modal" data-target="#quick-view" title="Быстрый просмотр">
                            <i class="ti-search" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "product-component",
        props: {
            product: {
                type: Object
            }
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addProduct',
                addToWishlist: 'wishlist/addProduct'
            }),
            quickView(product){
              this.$store.commit('products/setProduct', product)
            }
        }
    }
</script>

<style scoped>

</style>