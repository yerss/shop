import Vue from 'vue'
import Vuex from 'vuex'
import orders from "../../api/order";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: []
})

const getters = {
    order: state => {
        return state.selected
    },
    orders: state => {
        return state.list
    }
}

const actions = {
    async getOrders({ commit }) {
        let {
            data
        } = await orders.getOrders()
        commit('setOrders', data.data)
    },

    async addOrder({commit}, order) {
        let {
            data
        } = await orders.addOrder(order)
        commit('addOrder', data.data)
    },

    async editOrder({commit}, order) {
        let {
            data
        } = await orders.editOrder(order.id, order)
        commit('editOrder', data.data)
    },

    async deleteOrder({commit}, id) {
        await orders.deleteOrder(id)
        commit('deleteOrder', id)
    }
}

const mutations = {
    setOrders(state, data) {
        state.list = data
    },
    setOrder(state, order) {
        state.selected = order
    },
    addOrder(state, order) {
        state.list.unshift(order)
    },
    editOrder(state, order) {
        const orders = [...state.list]
        const index = orders.findIndex(p => p.id === order.id)
        if (index > -1) {
            orders[index] = {
                ...order
            }
        }
        state.list = orders
    },
    deleteOrder(state, id) {
        const orders = [...state.list]
        const index = orders.findIndex(p => p.id === id)
        if (index > -1) {
            orders.splice(index, 1)
        }
        state.list = orders
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}