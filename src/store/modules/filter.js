import filter from '../../api/filter'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    selected_group: {},
    selected_value: {},
    list_group: [],
    list_value: [],
    pagination_v: {},
    pagination_g: {}
})

const getters = {
    filterGroups: state => {
        return state.list_group
    },
    filterValues: state => {
        return state.list_value
    },
    filterGroup: state => {
        return state.selected_group
    },
    filterValue: state => {
        return state.selected_value
    },
    paginationV: state => {
        return state.pagination_v
    },
    paginationG: state => {
        return state.pagination_g
    }
}

const actions = {
    async getFilterGroups({
        commit
    }, params) {
        let {
            data
        } = await filter.getFilterGroups(params)
        commit('setFilterGroups', data.data)
        commit('setPaginationG', data.meta)
    },
    async getFilterValues({
        commit
    }, params) {
        let {
            data
        } = await filter.getFilterValues(params)
        commit('setFilterValues', data.data)
        commit('setPaginationV', data.meta)
    },
    async addFilterGroup({commit}, filterGroup){
        let {
            data
        } = await filter.addFilterGroup(filterGroup);
        commit('addFilterGroup', data.data)
    },
    async addFilterValue({commit}, filterValue){
        let {
            data
        } = await filter.addFilterValue(filterValue);
        commit('addFilterValue', data.data)
    },
    async editFilterValue({commit}, filterValue) {
        let {
            data
        } = await filter.editFilterValue(filterValue.id, filterValue)
        commit('editFilterValue', data.data)
    },
    async editFilterGroup({commit}, filterGroup){
        let {
            data
        } = await filter.editFilterGroup(filterGroup.id, filterGroup)
        commit('editFilterGroup', data.data)
    },
    async deleteFilterGroup({commit}, id){
        await filter.deleteFilterGroup(id)
        commit('deleteFilterGroup', id)
    },
    async deleteFilterValue({commit}, id){
        await filter.deleteFilterValue(id)
        commit('deleteFilterValue', id)
    }
}

const mutations = {
    setInitValue (state) {
        state.selected_value = {}
    },
    setInitGroup (state) {
        state.selected_group = {}
    },
    setFilterGroups (state, filterGroups) {
        state.list_group = filterGroups
    },
    setFilterValues (state, filterValues) {
        state.list_value = filterValues
    },
    setFilterGroup (state, filterGroup) {
        state.selected_group = filterGroup
    },
    setFilterValue (state, filterValue) {
        state.selected_value = filterValue
    },

    addFilterGroup(state, filterGroup) {
        state.list_group.unshift(filterGroup)
    },

    addFilterValue(state, filterValue) {
        state.list_value.unshift(filterValue)
    },
    editFilterGroup(state, filterGroup) {
        const filterGroups = [...state.list_group]
        const index = filterGroups.findIndex(p => p.id === filterGroup.id)
        if (index > -1) {
            filterGroups[index] = {
                ...filterGroup
            }
        }
        state.list_group = filterGroups
    },
    editFilterValue(state, filterValue) {
        const filterValues = [...state.list_value]
        const index = filterValues.findIndex(p => p.id === filterValue.id)
        if (index > -1) {
            filterValues[index] = {
                ...filterValue
            }
        }
        state.list_value = filterValues
    },
    deleteFilterGroup(state, id) {
        const filterGroups = [...state.list_group]
        const index = filterGroups.findIndex(p => p.id === id)
        if (index > -1) {
            filterGroups.splice(index, 1)
        }
        state.list_group = filterGroups
    },
    deleteFilterValue(state, id) {
        const filterValues = [...state.list_value]
        const index = filterValues.findIndex(p => p.id === id)
        if (index > -1) {
            filterValues.splice(index, 1)
        }
        state.list_value = filterValues
    },
    setPaginationV (state, data) {
        state.pagination_v = data
    },
    setPaginationG (state, data) {
        state.pagination_g = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}