import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    selected: {},
    products: [],
})

const getters = {
    product: state => {
        return state.selected
    },
    products: state => {
        return state.products
    }
}

const actions = {
    // async getProducts({
    //     commit
    // }) {
    //     let {
    //         data
    //     } = await //some method;
    //     commit('setProducts', data)
    // }
}

const mutations = {
    setProducts(state, data) {
        state.products = data
    },
    setProduct(state, product) {
        state.product = product
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}