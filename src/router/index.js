import Vue from 'vue'
import Router from 'vue-router'

const AdminMainComponent = () => import('@/views/admin/main-layout')
const MainComponent = () => import('@/views/shop/main-layout')
const ShopContent = () => import('@/views/shop/shop-content')
const ShopCatalog = () => import('@/views/shop/catalog/shop-layout')
const ShopRegister = () => import('@/views/shop/shop-register')
const ShopForgetPassword = () => import('@/views/shop/shop-forget-password')
const ShopCart = () => import('@/views/shop/cart/shop-cart')
const ShopWishlist = () => import('@/views/shop/wishlist/shop-wishlist')
const ShopCheckout = () => import('@/views/shop/checkout/shop-checkout')
const AboutUsComponent = () => import('@/views/shop/components/about-us-component')
const NewsComponent = () => import('@/views/shop/news/news-component')
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            name: 'admin_main',
            component: AdminMainComponent
        },
        {
            path: '/',
            component: MainComponent,
            children: [
                {
                    path: '',
                    name: 'shop_content',
                    component: ShopContent
                },
                {
                    path: 'shop',
                    name: 'shop_catalog',
                    component: ShopCatalog
                },
                {
                    path: 'about_us',
                    name: 'about_us',
                    component: AboutUsComponent
                },
                {
                    path: 'news',
                    name: 'news',
                    component: NewsComponent
                },
                {
                    path: 'register',
                    name: 'register',
                    component: ShopRegister
                },
                {
                    path: 'forget_password',
                    name: 'forget_password',
                    component: ShopForgetPassword
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: ShopCart,
                    beforeEnter: (to, from, next) => {
                        document.getElementById("cart_side").classList.remove('open-side')
                        next()
                    }
                },
                {
                    path: 'wishlist',
                    name: 'wishlist',
                    component: ShopWishlist,
                    beforeEnter: (to, from, next) => {
                        document.getElementById("wishlist_side").classList.remove('open-side')
                        next()
                    }
                },
                {
                    path: 'checkout',
                    name: 'checkout',
                    component: ShopCheckout
                }
            ]
        },

    ]
})


export default router
