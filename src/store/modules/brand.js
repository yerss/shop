import Vue from 'vue'
import Vuex from 'vuex'
import brands from "../../api/brand";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: []
})

const getters = {
    brand: state => {
        return state.selected
    },
    brands: state => {
        return state.list
    }
}

const actions = {
    async getBrands({
      commit
    }){
        let {
            data
        } = await brands.getBrands()
        commit('setBrands', data.data)
    },

    async addBrand({commit}, brand) {
        console.log(brand)
        let {
            data
        } = await brands.addBrand(brand)
        commit('addBrand', brand)
    },

    async editBrand({commit}, brand) {
        let {
            data
        } = await brands.editBrand(brand.id, brand)
        commit('editBrand', brand)
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}