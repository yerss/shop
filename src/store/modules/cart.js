import Vue from 'vue'
import Vuex from 'vuex'

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
    // async getProducts({
    //     commit
    // }) {
    //     let {
    //         data
    //     } = await //some method;
    //     commit('setProducts', data)
    // }

    addProduct({state, commit}, product) {
        const cartItem = state.products.find(p => p.id === product.id)
        if (!cartItem) {
            commit('addProduct', product)
        }else{
            commit('incrementItemQuantity', cartItem.id)
        }
    }
}


const mutations = {
    addProduct(state, product) {
        product.quantity = 1
        state.products.push(product)
    },
    incrementItemQuantity (state, id) {
        let cartItem = state.products.find(p => p.id === id)
        cartItem.quantity+=1
    },
    deleteProduct(state, id) {
        console.log(id)
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