import Vue from 'vue'
import Vuex from 'vuex'
import regions from "../../api/region";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: []
})

const getters = {
    region: state => {
        return state.selected
    },
    regions: state => {
        return state.list
    }
}

const actions = {
    async getRegions({
                        commit
                    }){
        let {
            data
        } = await regions.getRegions()
        commit('setRegions', data.data)
    },

    async addRegion({commit}, region) {
        let {
            data
        } = await regions.addRegion(region)
        commit('addRegion', region)
    },

    async editRegion({commit}, region) {
        let {
            data
        } = await regions.editRegion(region.id, region)
        commit('editRegion', region)
    },

    async deleteRegion({commit}, id) {
        await regions.deleteRegion(id)
        commit('deleteRegion', id)
    }
}

const mutations = {
    setRegions(state, data) {
        state.list = data
    },
    setRegion(state, region) {
        state.selected = region
    },
    addRegion(state, region) {
        state.list.unshift(region)
    },
    editRegion(state, region) {
        const regions = [...state.list]
        const index = regions.findIndex(p => p.id === region.id)
        if (index > -1) {
            regions[index] = {
                ...region
            }
        }
        state.list = regions
    },
    deleteRegion(state, id) {
        const regions = [...state.list]
        const index = regions.findIndex(p => p.id === id)
        if (index > -1) {
            regions.splice(index, 1)
        }
        state.list = regions
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}