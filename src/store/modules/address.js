import Vue from 'vue'
import Vuex from 'vuex'
import addresses from '../../api/address'

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: []
})

const getters = {
    address: state => {
        return state.selected
    },
    addresses: state => {
        return state.list
    }
}

const actions = {
    async getAddresses({
        commit
    }){
        let {
            data
        } = await addresses.getAddresses()
        commit('setAddresses', data.data)
    },

    async addAddress({commit}, address) {
        let {
            data
        } = await addresses.addAddress(address)
        commit('addAddress', address)
    },

    async editAddress({commit}, address) {
        let {
            data
        } = await addresses.editAddress(address.id, address)
        commit('editAddress', address)
    },

    async deleteAddress({commit}, id) {
        await addresses.deleteAddress(id)
        commit('deleteAddress', id)
    }
}

const mutations = {
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}