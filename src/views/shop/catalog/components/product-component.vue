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
                            <!--<b-form-rating :value="product.rating" color="#ffa800" no-border></b-form-rating>-->
                            <p>{{product.description}}</p>
                            <a href="">
                                <h6 class="price-title">
                                    {{product.alias}}
                                </h6>
                            </a>
                        </div>
                        <div class="detail-right">
                            <div class="check-price">
                                $ {{price}}
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
                                @click.prevent="addToCart(product)">
                            <i class="ti-bag"></i>
                        </button>
                        <a @click.prevent="addToWishlist(product)" href="javascript:void(0)" title="Добавить в хочу">
                            <i class="ti-heart" aria-hidden="true"></i>
                        </a>
                        <a @click.prevent="quickView(product)" href="javascript:void(0)" data-toggle="modal"
                           data-target="#quick-view" title="Быстрый просмотр">
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
    import $ from "jquery";

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
        computed: {
            price() {
                return this.product.price + this.product.price / 10
            }
        },
        methods: {
            ...mapActions({
                addCart: 'cart/addProduct',
                addWishlist: 'wishlist/addProduct'
            }),
            quickView(product) {
                this.$store.commit('products/setProduct', product)
            },

            addToCart(product) {
                $.notify({
                        icon: 'fa fa-check',
                        title: 'Успешно!',
                        message: 'Продукт успешно добавлен в Корзину'
                    },
                    {
                        element: 'body',
                        position: null,
                        type: "success",
                        allow_dismiss: true,
                        newest_on_top: false,
                        showProgressbar: true,
                        placement: {
                            from: "top",
                            align: "right"
                        },
                        offset: 20,
                        spacing: 10,
                        z_index: 1031,
                        delay: 2000,
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                        icon_type: 'class',
                        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                            '<span data-notify="icon"></span> ' +
                            '<span data-notify="title">{1}</span> ' +
                            '<span data-notify="message">{2}</span>' +
                            '<div class="progress" data-notify="progressbar">' +
                            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                            '</div>' +
                            '<a href="{3}" target="{4}" data-notify="url"></a>' +
                            '</div>'
                    });
                this.addCart(product)
            },

            addToWishlist(product) {
                $.notify({
                        icon: 'fa fa-check',
                        title: 'Успешно!',
                        message: 'Продукт успешно добавлен в Избранное'
                    },
                    {
                        element: 'body',
                        position: null,
                        type: "info",
                        allow_dismiss: true,
                        newest_on_top: false,
                        showProgressbar: true,
                        placement: {
                            from: "top",
                            align: "right"
                        },
                        offset: 20,
                        spacing: 10,
                        z_index: 1031,
                        delay: 2000,
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                        icon_type: 'class',
                        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                            '<span data-notify="icon"></span> ' +
                            '<span data-notify="title">{1}</span> ' +
                            '<span data-notify="message">{2}</span>' +
                            '<div class="progress" data-notify="progressbar">' +
                            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                            '</div>' +
                            '<a href="{3}" target="{4}" data-notify="url"></a>' +
                            '</div>'
                    });
                this.addWishlist(product)
            }
        }
    }
</script>

<style scoped>

</style>