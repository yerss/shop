import axios from 'axios'


const products =  {
    api: 'http://localhost:8001/api',

    getProducts () {
        const url = '/products/'
        return axios.get(this.api + url, {})
    },
    addProducts(products) {
        const url = `/products/`
        return axios.post(this.api + url, products)
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