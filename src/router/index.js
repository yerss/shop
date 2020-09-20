import Vue from 'vue'
import Router from 'vue-router'

const AdminMainComponent = () => import('@/views/admin/main-layout')
const MainComponent = () => import('@/views/shop/main-layout')
const ShopContent = () => import('@/views/shop/shop-content')
const ShopCatalog = () => import('@/views/shop/shop-layout')
const AboutUsComponent = () => import('@/views/shop/about-us-component')
const NewsComponent = () => import('@/views/shop/news-component')
const ComingSoonComponent = () => import('@/views/shop/coming-soon-component')
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
                }
            ]
        },
        {
            path: '/coming_soon',
            name: 'coming_soon',
            component: ComingSoonComponent
        }
    ]
})


export default router
