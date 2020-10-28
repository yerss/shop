import axios from 'axios'

const users = {
    api: 'http://localhost:8000/api',

    getUserProfile () {
        const url = '/users/profile/'
        return axios.get(this.api + url, {})
    },
    getUsers () {
        const url = '/users/'
        return axios.get(this.api + url, {})
    },
    addUser (user) {
        const url = `/users/`
        return axios.post(this.api + url, {
            ...user
        })
    },
    getUser (id) {
        const url = `/users/${id}`
        return axios.get(this.api + url, {})
    },
    editUser (id, user) {
        const url = `/users/${id}`
        return axios.put(this.api + url, {
            ...user
        })
    },
    deleteUser (id) {
        const url = `/users/${id}/`
        return axios.delete(this.api + url)
    },
    getUserOrders () {
        const url = '/users/orders/'
        return axios.get(this.api + url, {})
    }
}

export default users