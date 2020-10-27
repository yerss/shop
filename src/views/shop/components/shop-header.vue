<template>
    <header style="">
        <div class="mobile-fix-option"></div>
        <div class="layout-header2">
            <div class="container">
                <div class="col-md-12">
                    <div class="main-menu-block">
                        <div class="sm-nav-block">
                            <span class="sm-nav-btn"><i class="fa fa-bars"></i></span>
                            <ul class="nav-slide">
                                <li>
                                    <div class="nav-sm-back">
                                        Назад <i class="fa fa-angle-right pl-2"></i>
                                    </div>
                                </li>
                                <li><a href="#">western ware</a></li>
                                <li><a href="#">TV, Appliances</a></li>
                                <li><a href="#">Pets Products</a></li>
                                <li><a href="#">Car, Motorbike</a></li>
                                <li><a href="#">Industrial Products</a></li>
                                <li><a href="#">Beauty, Health Products</a></li>
                                <li><a href="#">Grocery Products </a></li>
                                <li><a href="#">Sports</a></li>
                                <li><a href="#">Bags, Luggage</a></li>
                                <li><a href="#">Movies, Music </a></li>
                                <li><a href="#">Video Games</a></li>
                                <li><a href="#">Toys, Baby Products</a></li>
                                <li class="mor-slide-open">
                                    <ul>
                                        <li><a href="#">Bags, Luggage</a></li>
                                        <li><a href="#">Movies, Music </a></li>
                                        <li><a href="#">Video Games</a></li>
                                        <li><a href="#">Toys, Baby Products</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="mor-slide-click">
                                        Больше
                                        <i class="fa fa-angle-down pro-down"></i>
                                        <i class="fa fa-angle-up pro-up"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="logo-block">
                            <router-link to="/">
                                <img src="../../../assets/images/layout-2/logo/logo.png" class="img-fluid  " alt="logo">
                            </router-link>
                        </div>
                        <div class="input-block">
                            <div class="input-box">
                                <form class="big-deal-form">
                                    <div class="input-group ">
                                        <div class="input-group-prepend">
                                            <span class="search"><i class="fa fa-search"></i></span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Поиск...">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="cart-block cart-hover-div " @click="openCart()">
                            <div class="cart ">
                                <span class="cart-product">{{cart_count}}</span>
                                <ul>
                                    <li class="mobile-cart  ">
                                        <a href="#">
                                            <i class="icon-shopping-cart "></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="cart-item">
                                <h5>корзина</h5>
                                <h5></h5>
                            </div>
                        </div>
                        <div class="menu-nav">
                            <span class="toggle-nav">
                <i class="fa fa-bars "></i>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="category-header-2">
            <div class="custom-container">
                <div class="row">
                    <div class="col">
                        <div class="navbar-menu">
                            <div class="category-left">
                                <div class="nav-block">
                                    <div class="nav-left">
                                        <nav class="navbar" data-toggle="collapse"
                                             data-target="#navbarToggleExternalContent">
                                            <button class="navbar-toggler" type="button">
                                                <span class="navbar-icon"><i class="fa fa-arrow-down"></i></span>
                                            </button>
                                            <h5 class="mb-0  text-white title-font">Список категории</h5>
                                        </nav>
                                        <div class="collapse  nav-desk" id="navbarToggleExternalContent">
                                            <ul class="nav-cat title-font">
                                                <li>
                                                    <category-navbar/>
                                                    <ul class="mor-slide-open">
                                                        <category-navbar/>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a class="mor-slide-click">больше <i
                                                            class="fa fa-angle-down pro-down"></i><i
                                                            class="fa fa-angle-up pro-up"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="menu-block">
                                    <nav id="main-nav">
                                        <div class="toggle-nav"><i class="fa fa-bars sidebar-bar"></i></div>
                                        <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                                            <li>
                                                <div class="mobile-back text-right">Назад<i
                                                        class="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                            </li>
                                            <li>
                                                <router-link class="dark-menu-item" to="/">Главная</router-link>
                                            </li>
                                            <li>
                                                <router-link class="dark-menu-item" to="/categories">Категории</router-link>
                                            </li>
                                            <li class="mega">
                                                <router-link class="dark-menu-item" to="/shop">Продукты</router-link>
                                            </li>
                                            <li>
                                                <router-link class="dark-menu-item" to="/about_us">О нас
                                                </router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="icon-block">
                                    <ul>
                                        <li class="mobile-user onhover-dropdown">
                                            <router-link to="/profile">
                                                <i class="icon-user"></i>
                                            </router-link>
                                        </li>
                                        <li class="mobile-wishlist" @click="openWishlist()">
                                            <a><i class="icon-heart"></i>
                                                <div class="cart-item">
                                                    <div>{{count_wishlist}} Предмет<span>Избранное</span></div>
                                                </div>
                                            </a></li>
                                        <li class="mobile-search"><a href="javascript:void(0)"><i class="icon-search"></i></a>
                                            <div class="search-overlay">
                                                <div>
                                                    <span class="close-mobile-search">×</span>
                                                    <div class="overlay-content">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-xl-12">
                                                                    <form>
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control"
                                                                                   id="exampleInputPassword1"
                                                                                   placeholder="Search a Product">
                                                                        </div>
                                                                        <button type="submit" class="btn btn-primary">
                                                                            <i class="fa fa-search"></i></button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="mobile-setting mobile-setting-hover">
                                            <i class="icon-settings"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="category-right">
                                <div class="contact-block">
                                    <div>
                                        <i class="fa fa-volume-control-phone"></i>
                                        <span>Служба поддержки<span>123-456-76890</span></span>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <div class="gift-block" data-toggle="dropdown">
                                        <div class="grif-icon">
                                            <i class="icon-gift"></i>
                                        </div>
                                        <div class="gift-offer">
                                            <p>Купоны</p>
                                            <span>Скидки %</span>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu gift-dropdown">
                                        <div class="media">
                                            <div class="mr-3">
                                                <img src="../../../assets/images/icon/1.png"
                                                     alt="Generic placeholder image">
                                            </div>
                                            <div class="media-body">
                                                <h5 class="mt-0">Billion Days</h5>
                                                <p><img src="../../../assets/images/icon/currency.png" class="cash"
                                                        alt="curancy"> Flat Rs. 270 Rewards</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="mr-3">
                                                <img src="../../../assets/images/icon/2.png"
                                                     alt="Generic placeholder image" class="gift-bloc">
                                            </div>
                                            <div class="media-body">
                                                <h5 class="mt-0">Fashion Discount</h5>
                                                <p><img src="../../../assets/images/icon/fire.png" class="fire"
                                                        alt="fire">Extra
                                                    10% off (upto Rs. 10,000*) </p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="mr-3">
                                                <img src="../../../assets/images/icon/3.png"
                                                     alt="Generic placeholder image">
                                            </div>
                                            <div class="media-body">
                                                <h5 class="mt-0">75% off Store</h5>
                                                <p>No coupon code is required.</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="mr-3">
                                                <img src="../../../assets/images/icon/6.png"
                                                     alt="Generic placeholder image">
                                            </div>
                                            <div class="media-body">
                                                <h5 class="mt-0">Upto 50% off</h5>
                                                <p>Buy popular phones under Rs.20.</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="mr-3">
                                                <img src="../../../assets/images/icon/5.png"
                                                     alt="Generic placeholder image">
                                            </div>
                                            <div class="media-body">
                                                <h5 class="mt-0">Beauty store</h5>
                                                <p><img src="../../../assets/images/icon/currency.png" class="cash"
                                                        alt="curancy"> Flat Rs. 270 Rewards</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import $ from "jquery"
    import smartmenu from '../../../assets/js/menu'
    import {mapGetters} from 'vuex'
    import ProductSidebar from "@/views/shop/cart/components/product-sidebar";
    import CategoryNavbar from "@/views/shop/categories/components/category-navbar";

    export default {
        name: "shop-header",
        components: {CategoryNavbar, ProductSidebar},
        mounted() {
            $('.language-dropdown-open').slideUp();
            $('.language-dropdown-click').on('click', function () {
                $('.language-dropdown-open').slideToggle()
            });
            $('.curroncy-dropdown-open').slideUp();
            $('.curroncy-dropdown-click').on('click', function () {
                $('.curroncy-dropdown-open').slideToggle()
            })
            $('.pro-up').hide();
            $('.mor-slide-open').slideUp();
            $('.mor-slide-click').on('click', function () {
                $('.mor-slide-open').slideToggle();
                $('.pro-up').toggle();
                $('.pro-down').toggle();
            })

            $('.search-overlay').hide();
            $('.close-mobile-search').on('click', function () {
                $('.search-overlay').fadeOut();
            })
            $('.mobile-search').on('click', function () {
                $('.search-overlay').show();
            })

            $(function () {
                $('#main-menu').smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });
                $('#sub-menu').smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });
            });
            $('.toggle-nav').on('click', function () {
                $('.sm-horizontal').css("right", "0px");
            });
            $(".mobile-back").on('click', function () {
                $('.sm-horizontal').css("right", "-410px");
            });

            $('.sm-nav-btn').on('click', function () {
                $('.nav-slide').css("left", "0px");
            });
            $(".nav-sm-back").on('click', function () {
                $('.nav-slide').css("left", "-410px");
            });

            $('.toggle-nav-desc').on('click', function () {
                $('.desc-horizontal').css("right", "0px");
            });
            $(".desc-back").on('click', function () {
                $('.desc-horizontal').css("right", "-410px");
            });
        },
        methods: {
            openWishlist() {
                document.getElementById("wishlist_side").classList.add('open-side');
            },
            openCart() {
                document.getElementById("cart_side").classList.add('open-side');
            },
        },
        computed: {
            ...mapGetters({
                isLoggedIn: 'auth/isLoggedIn',
                cart_count: 'cart/products_count',
                count_wishlist: 'wishlist/products_count',
            })
        }
    }
</script>

<style scoped>

</style>