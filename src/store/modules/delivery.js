import delivery from '../../api/delivery'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    drivers: {},
    pagination: {}
})

const  getters = {
    drivers: state => {
        return state.drivers
    },
    pagination: state => {
        return state.pagination
    }
}

const actions = {
    async addProducts({commit}, products) {
        let {
            data
        } = await delivery.addProducts(products)
    },
    async addDrivers({commit}, driver){
        let {
            data
        } = await delivery.addDriver(driver)
    },
    async deleteDriver({commit}, id) {
        await delivery.deleteRider(id)
    },
    async getDrivers({commit}){
        let {
            data
        } =  await delivery.getDrivers()
        commit('setDrivers', data.data)
        commit('setPagination', {
            first_page_url: data.first_page_url,
            from: data.from,
            last_page: data.last_page,
            last_page_url: data.last_page_url,
            next_page_url: data.next_page_url,
            path: data.path,
            per_page: data.per_page,
            to: data.to,
            total: data.total
        })
    }
}

const mutations = {
    setDrivers(state, data) {
        state.drivers = data
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