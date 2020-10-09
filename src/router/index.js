import Vue from 'vue'
import Router from 'vue-router'

const MainComponent = () => import('@/views/shop/main-layout')
const ShopContent = () => import('@/views/shop/shop-content')
const ShopCatalog = () => import('@/views/shop/catalog/shop-layout')
const ShopRegister = () => import('@/views/shop/shop-register')
const ShopLogin = () => import('@/views/shop/shop-login')
const ShopForgetPassword = () => import('@/views/shop/shop-forget-password')
const ShopCart = () => import('@/views/shop/cart/shop-cart')
const ShopProfile = () => import('@/views/shop/shop-profile')
const ShopWishlist = () => import('@/views/shop/wishlist/shop-wishlist')
const ShopCheckout = () => import('@/views/shop/checkout/shop-checkout')
const ShopCategories = () => import('@/views/shop/categories/shop-categories')
const AboutUsComponent = () => import('@/views/shop/components/about-us-component')
const NewsComponent = () => import('@/views/shop/news/news-component')

const AdminMainComponent = () => import('@/views/admin/main-layout')
const AdminDashboard = () => import('@/views/admin/dashboard')
const AdminProductTable = () => import('@/views/admin/product/product-table')
const AdminProductFrom = () => import('@/views/admin/product/product-form')
const AdminCategoryTable = () => import('@/views/admin/category/category-table')
const AdminSubCategoryTable = () => import('@/views/admin/category/sub-category-table')

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            component: AdminMainComponent,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: AdminDashboard
                },
                {
                    path: 'products',
                    name: 'products',
                    component: AdminProductTable
                },
                {
                    path: 'add-product',
                    name: 'add-product',
                    component: AdminProductFrom
                },
                {
                    path: 'categories',
                    name: 'categories',
                    component: AdminCategoryTable
                },
                {
                    path: 'sub-categories',
                    name: 'sub-categories',
                    component: AdminSubCategoryTable
                },
            ]
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
                    path: 'login',
                    name: 'login',
                    component: ShopLogin
                },
                {
                    path: 'forgot_password',
                    name: 'forgot_password',
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
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: ShopProfile
                }
                ,
                {
                    path: 'categories',
                    name: 'categories',
                    component: ShopCategories
                },

            ]
        },

    ]
})


export default router
