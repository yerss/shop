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
    }
}

const mutations = {
    setCategories(state, categories) {
        state.list = categories
    },
    setCategory(state, category) {
        state.selected = category
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}