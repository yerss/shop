import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import cart from '@/store/modules/cart'
import wishlist from '@/store/modules/wishlist'

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
        products, cart, wishlist
    }
})