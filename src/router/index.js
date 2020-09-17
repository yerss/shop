import Vue from 'vue'
import Router from 'vue-router'

const AdminMainComponent = () => import('@/views/admin/main-layout')
const MainComponent = () => import('@/views/shop/main-layout')

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
        }
    ]
})


export default router
