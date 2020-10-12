import Vue from 'vue'
import Vuex from 'vuex'
import cities from "../../api/city";

Vue.use(Vuex)

const state = () => ({
    selected: {},
    list: []
})

const getters = {
    city: state => {
        return state.selected
    },
    cities: state => {
        return state.list
    }
}

const actions = {
    async getCities({
     commit
    }){
        let {
            data
        } = await cities.getCities()
        commit('setCities', data.data)
    },

    async addCity({commit}, city) {
        let {
            data
        } = await cities.addCity(city)
        commit('addCity', city)
    },

    async editCity({commit}, city) {
        let {
            data
        } = await cities.editCity(city.id, city)
        commit('editCity', city)
    },

    async deleteCity({commit}, id) {
        await cities.deleteCity(id)
        commit('deleteCity', id)
    }
}

const mutations = {
    setCities(state, data) {
        state.list = data
    },
    setCity(state, city) {
        state.selected = city
    },
    addCity(state, city) {
        state.list.unshift(city)
    },
    editCity(state, city) {
        const cities = [...state.list]
        const index = cities.findIndex(p => p.id === city.id)
        if (index > -1) {
            cities[index] = {
                ...city
            }
        }
        state.list = cities
    },
    deleteCity(state, id) {
        const cities = [...state.list]
        const index = cities.findIndex(p => p.id === id)
        if (index > -1) {
            cities.splice(index, 1)
        }
        state.list = cities
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}