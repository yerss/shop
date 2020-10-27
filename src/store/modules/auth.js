import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from '../../api/login'
import users from '../../api/users'
// import {parseJwt} from '@/helpers'
Vue.use(Vuex)

const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || '',
    // refresh: '',
    currentUser: {}
})

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    authToken: state => state.token,
    currentUser: state => state.currentUser,
    role: state => state.role,
}

const actions = {
    async login ({ dispatch, commit }, params) {
        commit('auth_request')
        try {
            let { data } = await auth.login(params)
            console.log(data)
            const token = data.token
            // const refresh = data.refresh
            const role = data.role.name
            localStorage.setItem('token', token)
            if (role === 'admin'){
                localStorage.setItem('role', role)
            }
            // localStorage.setItem('refreshToken', refresh)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('auth_success', {
                token: token,
                role: role
            })
            dispatch('getCurrentUser')
        } catch (err) {
            console.log(err)
        }
    },
    // refreshToken ({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         commit('auth_request')
    //         auth.refreshToken().then(({ data }) => {
    //             const token = data.access
    //             localStorage.setItem('token', token)
    //             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //             commit('auth_success', token, localStorage.getItem('refreshToken'))
    //             resolve(token)
    //         }).catch(err => {
    //             commit('auth_error')
    //             localStorage.removeItem('token')
    //             reject(err)
    //         })
    //     })
    // },
    logout ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            // localStorage.removeItem('refreshToken')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },
    async getCurrentUser ({commit}) {
        try {
            const res = await users.getUserProfile()
            commit('setCurrentUser', res.data.data)
        } catch (e) {
            console.error(e.message)
        }
    }
}


const mutations = {
    auth_request (state) {
        state.status = 'loading'
    },
    auth_success (state, params) {
        state.status = 'success'
        state.token = params.token
        state.role = params.role
        // state.refresh = refresh
    },
    auth_error (state) {
        state.status = 'error'
    },
    logout (state) {
        state.status = ''
        state.token = ''
    },
    setCurrentUser (state, currentUser) {
        state.currentUser = currentUser
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}