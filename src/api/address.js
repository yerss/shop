import axios from 'axios'


const addresses =  {
    api: 'http://localhost:8000/api',

    getAddresses () {
        const url = '/addresses/'
        return axios.get(this.api + url, {})
    },
    addAddress(address) {
        const url = `/addresses/`
        return axios.post(this.api + url, address)
    },
    getAddress (id) {
        const url = `/addresses/${id}`
        return axios.get(this.api + url, {})
    },
    editAddress (id, product) {
        const url = `/addresses/${id}`
        return axios.put(this.api + url, {
            ...product
        })
    },
    deleteAddress (id) {
        const url = `/addresses/${id}/`
        return axios.delete(this.api + url)
    },
}

export default addresses