import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    products: [],
})

const getters = {
    products: state => {
        return state.products
    }
}

const actions = {

}

const mutations = {
    setProducts(state, data) {
        state.products = data
    },
    addProduct(state, product) {
        state.product = product
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