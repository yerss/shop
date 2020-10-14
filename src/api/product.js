import axios from 'axios'

const products = {
    api: 'http://localhost:8000/api',

    getProducts () {
        const url = '/products/'
        return axios.get(this.api + url, {})
    },
    getProductsFilter () {
        const url = '/products/'
        return axios.get(this.api + url, {})
    },
    getProductsSearch () {
        const url = '/products/'
        return axios.get(this.api + url, {})
    },
    addProduct (product) {
        const url = `/products/`
        return axios.post(this.api + url, product)
    },
    getProduct (id) {
        const url = `/products/${id}`
        return axios.get(this.api + url, {})
    },
    editProduct (id, product) {
        const url = `/products/${id}`
        return axios.put(this.api + url, {
            ...product
        })
    },
    deleteProduct (id) {
        const url = `/products/${id}/`
        return axios.delete(this.api + url)
    },
}

export default products