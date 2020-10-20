import delivery from '../../api/delivery'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({

})

const  getters = {

}

const actions = {
    async addProducts(products) {
        let {
            data
        } = await delivery.addProducts(data)
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}