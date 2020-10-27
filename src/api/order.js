import axios from 'axios'


const orders =  {
    api: 'http://localhost:8000/api',

    getOrders (params) {
        const url = '/orders/'
        return axios.get(this.api + url, {params})
    },
    addOrder(order) {
        const url = `/orders/`
        return axios.post(this.api + url, order)
    },
    getOrder (id) {
        const url = `/orders/${id}`
        return axios.get(this.api + url, {})
    },
    editOrder (id, order) {
        const url = `/orders/${id}`
        return axios.put(this.api + url, {
            ...order
        })
    },
    deleteOrder (id) {
        const url = `/orders/${id}/`
        return axios.delete(this.api + url)
    },
}

export default orders