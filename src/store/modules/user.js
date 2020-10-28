import Vue from 'vue'
import Vuex from 'vuex'
import users from "../../api/users";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: [],
    orders: {},
    orders_pagination: {}
})

const getters = {
    user: state => {
        return state.selected
    },
    users: state => {
        return state.list
    },
    orders: state => {
        return state.orders
    },
    ordersPagination: state => {
        return state.orders_pagination
    }
}

const actions = {
    async getUsers({
      commit
    }){
        let {
            data
        } = await users.getUsers()
        commit('setUsers', data.data)
    },
    async getUserOrders ({
        commit
    }) {
        let {
            data
        } = await users.getUserOrders()
        commit('setUserOrders', data.data)
        commit('setOrdersPagination', data.meta)
    },
    async addUser({commit}, user) {
        let {
            data
        } = await users.addUser(user)
        commit('addUser', data)
    },

    async editUser({commit}, user) {
        let {
            data
        } = await users.editUser(user.id, user)
        commit('editUser', data)
    },

    async deleteUser({commit}, id) {
        await users.deleteUser(id)
        commit('deleteUser', id)
    }
}

const mutations = {
    setUsers(state, data) {
        state.list = data
    },
    setUser(state, user) {
        state.selected = user
    },
    addUser(state, user) {
        state.list.unshift(user)
    },
    editUser(state, user) {
        const users = [...state.list]
        const index = users.findIndex(p => p.id === user.id)
        if (index > -1) {
            users[index] = {
                ...user
            }
        }
        state.list = users
    },
    deleteUser(state, id) {
        const users = [...state.list]
        const index = users.findIndex(p => p.id === id)
        if (index > -1) {
            users.splice(index, 1)
        }
        state.list = users
    },

    setUserOrders (state, data) {
        state.orders = data
    },

    setOrdersPagination (state, data) {
        state.orders_pagination = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}