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
const AdminFilterValueTable = () => import('@/views/admin/filter/filter-value-table')
const AdminFilterGroupTable = () => import('@/views/admin/filter/filter-group-table')
const AdminBrandTable = () => import('@/views/admin/brand/brand-table')
const AdminCityTable = () => import('@/views/admin/address/city-table')
const AdminAddressTable = () => import('@/views/admin/address/address-table')
const AdminRegionTable = () => import('@/views/admin/address/region-table')
const AdminMediaTable = () => import('@/views/admin/media/media-table')
const AdminOrdersTable = () => import('@/views/admin/orders/order-table')
const AdminTransactionTable = () => import('@/views/admin/orders/transaction-table')
const AdminReports = () => import('@/views/admin/reports/reports')
const AdminUserTable = () => import('@/views/admin/user/user-table')
const AdminAddUser = () => import('@/views/admin/user/user-form')
const AdminProfileSettings = () => import('@/views/admin/profile/profile-settings')


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
                {
                    path: 'filter-groups',
                    name: 'filter-groups',
                    component: AdminFilterGroupTable
                },
                {
                    path: 'filter-values',
                    name: 'filter-values',
                    component: AdminFilterValueTable
                },
                {
                    path: 'brands',
                    name: 'brands',
                    component: AdminBrandTable
                },
                {
                    path: 'regions',
                    name: 'regions',
                    component: AdminRegionTable
                },
                {
                    path: 'addresses',
                    name: 'addresses',
                    component: AdminAddressTable
                },
                {
                    path: 'cities',
                    name: 'cities',
                    component: AdminCityTable
                },
                {
                    path: 'media',
                    name: 'media',
                    component: AdminMediaTable
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: AdminOrdersTable
                },
                {
                    path: 'transactions',
                    name: 'transactions',
                    component: AdminTransactionTable
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: AdminProfileSettings
                },
                {
                    path: 'reports',
                    name: 'reports',
                    component: AdminReports
                },
                {
                    path: 'users',
                    name: 'users',
                    component: AdminUserTable
                },
                {
                    path: 'add-user',
                    name: 'add-user',
                    component: AdminAddUser
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
                },
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
