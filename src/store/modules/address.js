import Vue from 'vue'
import Vuex from 'vuex'
import addresses from '../../api/address'

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: [],
    address_to: {},
    pagination: {}
})

const getters = {
    address: state => {
        return state.selected
    },
    addresses: state => {
        return state.list
    },
    address_to: state => {
        return state.address_to
    },
    pagination: state => {
        return state.pagination
    }
}

const actions = {
    async getAddresses({
        commit
    }, params){
        let {
            data
        } = await addresses.getAddresses(params)
        commit('setAddresses', data.data)
        commit('setPagination', data.meta)
    },

    async addAddress({commit}, address) {
        let {
            data
        } = await addresses.addAddress(address)
        commit('addAddress', data.data)
        return data.data
    },

    async editAddress({commit}, address) {
        let {
            data
        } = await addresses.editAddress(address.id, address)
        commit('editAddress', data.data)
    },

    async deleteAddress({commit}, id) {
        await addresses.deleteAddress(id)
        commit('deleteAddress', id)
    }
}

const mutations = {
    setAddressTo(state, data) {
        state.address_to = data
    },
    setAddresses(state, data) {
        state.list = data
    },
    setAddress(state, address) {
        state.selected = address
    },
    addAddress(state, address) {
        state.list.unshift(address)
    },
    editAddress(state, address) {
        const addresses = [...state.list]
        const index = addresses.findIndex(p => p.id === address.id)
        if (index > -1) {
            addresses[index] = {
                ...addresses
            }
        }
        state.list = addresses
    },
    deleteAddress(state, id) {
        const  addresses = [...state.list]
        const index = addresses.findIndex(p => p.id === id)
        if (index > -1) {
            addresses.splice(index, 1)
        }
        state.list = addresses
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