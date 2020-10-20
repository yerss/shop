import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import products from './modules/products'
import cart from './modules/cart'
import wishlist from './modules/wishlist'
import categories from './modules/categories'
import auth from './modules/auth'
import filters from './modules/filter'
import regions from './modules/region'
import cities from './modules/city'
import addresses from './modules/address'
import brands from './modules/brand'
import users from './modules/user'
import orders from './modules/orders'

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
        products, cart, wishlist, categories, auth, filters, regions, cities, addresses, brands, users, orders
    }
})