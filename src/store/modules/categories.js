import categories from "../../api/category";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: {}
})

const getters = {
    categories: state => {
        return state.list
    },
    category: state => {
        return state.selected
    }
}

const actions = {
    async getCategories({
        commit
    }){
        let {
            data
        } = await categories.getCategories()
        commit('setCategories', data.data)
    },
    async addCategory({commit}, category) {
        let {
            data
        } = await categories.addCategory(category)
        commit('addCategory', data)
    },
    async editCategory({commit}, category){
        let {
            data
        } = await categories.editCategory(category.id, category)
        commit('editCategory', category)
    },
    async deleteCategory({commit}, id){
        await categories.deleteCategory(id)
        commit('deleteCategory', id)
    },
}

const mutations = {
    setCategories(state, categories) {
        state.list = categories
    },
    setCategory(state, category) {
        state.selected = category
    },
    addCategory(state, category) {
        state.list.unshift(category)
    },
    editCategory(state, category) {
        const categories = [...state.list]
        const index = categories.findIndex(p => p.id === category.id)
        if (index > -1) {
            categories[index] = {
                ...category
            }
        }
        state.list = categories
    },
    deleteCategory(state, id) {
        const categories = [...state.list]
        const index = categories.findIndex(p => p.id === id)
        if (index > -1) {
            categories.splice(index, 1)
        }
        state.list = categories
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}