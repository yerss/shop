import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import cart from '@/store/modules/cart'
import wishlist from '@/store/modules/wishlist'
import categories from '@/store/modules/categories'
import auth from '@/store/modules/auth'
import filters from '@/store/modules/filter'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    getters: {

    },
    actions: {

    },
    mutations: {

    },
    modules: {
        products, cart, wishlist, categories, auth, filters
    }
})