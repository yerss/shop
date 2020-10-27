import Vue from 'vue'
import Vuex from 'vuex'
import brands from "../../api/brand";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: [],
    pagination: {}
})

const getters = {
    brand: state => {
        return state.selected
    },
    brands: state => {
        return state.list
    },
    pagination: state => {
        return state.pagination
    }
}

const actions = {
    async getBrands({
      commit
    }, params){
        let {
            data
        } = await brands.getBrands(params)
        commit('setBrands', data.data)
        commit('setPagination', data.meta)
    },

    async addBrand({commit}, brand) {
        let {
            data
        } = await brands.addBrand(brand)
        commit('addBrand', data.data)
    },

    async editBrand({commit}, brand) {
        let {
            data
        } = await brands.editBrand(brand.id, brand)
        commit('editBrand', data.data)
    },

    async deleteBrand({commit}, id) {
        await brands.deleteBrand(id)
        commit('deleteBrand', id)
    }
}

const mutations = {
    setBrands(state, data) {
        state.list = data
    },
    setBrand(state, brand) {
        state.selected = brand
    },
    addBrand(state, brand) {
        state.list.unshift(brand)
    },
    editBrand(state, brand) {
        const brands = [...state.list]
        const index = brands.findIndex(p => p.id === brand.id)
        if (index > -1) {
            brands[index] = {
                ...brand
            }
        }
        state.list = brands
    },
    deleteBrand(state, id) {
        const brands = [...state.list]
        const index = brands.findIndex(p => p.id === id)
        if (index > -1) {
            brands.splice(index, 1)
        }
        state.list = brands
    },

    setPagination(state, data) {
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