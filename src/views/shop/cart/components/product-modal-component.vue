<template>
    <div class="modal fade bd-example-modal-lg theme-modal" id="quick-view" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content quick-view-modal">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <div class="row">
                        <div class="col-lg-6 col-xs-12">
                            <div class="quick-view-img"><img :src="product.image" alt="" class="img-fluid "></div>
                        </div>
                        <div class="col-lg-6 rtl-text">
                            <div class="product-right">
                                <h2>{{product.name}}</h2>
                                <h3>$ {{product.price}}</h3>
                                <ul class="color-variant">
                                    <li class="bg-light0"></li>
                                    <li class="bg-light1"></li>
                                    <li class="bg-light2"></li>
                                </ul>
                                <div class="border-product">
                                    <h6 class="product-title">Детали продукта</h6>
                                    <p>{{product.content}}</p>
                                </div>
                                <div class="product-description border-product">
<!--                                    <div class="size-box">-->
<!--                                        <ul>-->
<!--                                            <li class="active"><a href="#">s</a></li>-->
<!--                                            <li><a href="#">m</a></li>-->
<!--                                            <li><a href="#">l</a></li>-->
<!--                                            <li><a href="#">xl</a></li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
                                    <h6 class="product-title">Количество</h6>
                                    <div class="qty-box">
                                        <div class="input-group"><span class="input-group-prepend"><button type="button" class="btn quantity-left-minus" data-type="minus" data-field="">
                                            <i class="ti-angle-left"></i></button> </span>
                                            <input type="text" name="quantity" class="form-control input-number" v-model="product.pieces" >
                                            <span class="input-group-prepend">
                                                <button type="button" class="btn quantity-right-plus" data-type="plus" data-field="">
                                                    <i class="ti-angle-right"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-buttons">
                                    <a href="javascript:void(0)" class="btn btn-normal" @click="addProductToCart">В корзину</a>
                                    <a href="javascript:void(0)" class="btn btn-normal">детали</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "product-modal-component",
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                product: 'products/product'
            })
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addProduct'
            }),
            addProductToCart(){
               this.addToCart(this.product).finally(()=>{
                   $('#quick-view').modal('toggle')
               })
            }

        }
    }
</script>

<style scoped>

</style>