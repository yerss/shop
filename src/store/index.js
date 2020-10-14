import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import products from '@/store/modules/products'
import cart from '@/store/modules/cart'
import wishlist from '@/store/modules/wishlist'
import categories from '@/store/modules/categories'
import auth from '@/store/modules/auth'
import filters from '@/store/modules/filter'
import regions from '@/store/modules/region'
import cities from '@/store/modules/city'
import addresses from '@/store/modules/address'
import brands from '@/store/modules/brand'
import users from '@/store/modules/user'

Vue.use(Vuex)
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
    state: {
        editState: false,
        addState: false,
    },
    getters: {
        addState: state => {
            return state.addState
        },
        editState: state => {
            return state.editState
        }
    },
    actions: {

    },
    mutations: {
        setAddState(state, add){
            state.addState = add
        },
        setEditState(state, edit){
            state.editState = edit
        }
    },
    modules: {
        products, cart, wishlist, categories, auth, filters, regions, cities, addresses, brands, users
    }
})