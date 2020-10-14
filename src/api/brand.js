import axios from 'axios'

const brands = {
    api: 'http://localhost:8000/api',

    getBrands () {
        const url = '/brands/'
        return axios.get(this.api + url, {})
    },
    addBrand (brand) {
        const url = `/brands/`
        return axios.post(this.api + url, brand)
    },
    getBrand (id) {
        const url = `/brands/${id}`
        return axios.get(this.api + url, {})
    },
    editBrand (id, brand) {
        const url = `/brands/${id}`
        return axios.put(this.api + url, {
            ...brand
        })
    },
    deleteBrand (id) {
        const url = `/brands/${id}/`
        return axios.delete(this.api + url)
    },
}

export default brands