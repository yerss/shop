import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from "../../api/wishlist";

Vue.use(Vuex)

const state = () => ({
    products: [],
})

const getters = {
    products: state => {
        return state.products
    },
    products_count: state => {
        return state.products.length
    }
}

const actions = {
    async getProducts({ commit }){
        let {
            data
        } = await wishlist.getLikes()
        commit('setProducts', data.data)
    },
    async addProduct({commit}, product) {

        let {
            data
        } = await wishlist.addLike(product.id)
        commit('addProduct', product)
    },
    async deleteProduct({commit}, id) {
        await wishlist.deleteLike(id)
        commit('deleteProduct', id)
    }
}

const mutations = {
    setProducts(state, data) {
        state.products = data
    },
    addProduct(state, product) {
        state.products.push(product)
    },
    deleteProduct(state, id) {
        const products = [...state.products]
        const index = products.findIndex(p => p.id === id)
        if (index > -1) {
            products.splice(index, 1)
        }
        state.products = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}