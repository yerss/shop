import axios from 'axios'


const products =  {
    api: 'http://localhost:8001/api',

    addProducts(products) {
        const url = `/shop/save-products/`
        return axios.post(this.api + url, products)
    },
    getDrivers() {
        const url = '/shop/get-riders'
        return axios.get(this.api + url, {})
    },
    addDriver (driver) {
        const url = '/shop/create-rider/'
        return axios.post(this.api + url, {
            driver
        })
    },
    deleteRider (id) {
        const url = `/shop/delete-rider/${id}/`
        return axios.delete(this.api + url)
    }
}

export default products