import Vue from 'vue'
import Vuex from 'vuex'
import products from "../../api/product";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: [],
    pagination: {}
})

const getters = {
    product: state => {
        return state.selected
    },
    products: state => {
        return state.list
    },
    pagination: state => {
        return state.pagination
    }
}

const actions = {
    async getProducts({
        commit
    }, params){
        let {
            data
        } = await products.getProducts(params)
        commit('setProducts', data.data)
        commit('setPagination', data.meta)
    },

    async addProduct({commit}, product) {
        let {
            data
        } = await products.addProduct(product)
        commit('addProduct', data.data)
    },

    async editProduct({commit}, product) {
        let {
            data
        } = await products.editProduct(product.id, product)
        commit('editProduct', data.data)
    },

    async deleteProduct({commit}, id) {
        await products.deleteProduct(id)
        commit('deleteProduct', id)
    }
}

const mutations = {
    setProducts(state, data) {
        state.list = data
    },
    setProduct(state, product) {
        product.pieces = 1
        state.selected = product
    },
    addProduct(state, product) {
        state.list.unshift(product)
    },
    editProduct(state, product) {
        const products = [...state.list]
        const index = products.findIndex(p => p.id === product.id)
        if (index > -1) {
            products[index] = {
                ...product
            }
        }
        state.list = products
    },
    deleteProduct(state, id) {
        const products = [...state.list]
        const index = products.findIndex(p => p.id === id)
        if (index > -1) {
            products.splice(index, 1)
        }
        state.list = products
    },
    setPagination(state, data){
        state.pagination = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}