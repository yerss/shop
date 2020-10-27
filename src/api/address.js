import axios from 'axios'


const addresses =  {
    api: 'http://localhost:8000/api',

    getAddresses (params) {
        const url = '/addresses/'
        return axios.get(this.api + url, {params})
    },
    addAddress(address) {
        const url = `/addresses/`
        return axios.post(this.api + url, address)
    },
    getAddress (id) {
        const url = `/addresses/${id}`
        return axios.get(this.api + url, {})
    },
    editAddress (id, address) {
        const url = `/addresses/${id}`
        return axios.put(this.api + url, {
            ...address
        })
    },
    deleteAddress (id) {
        const url = `/addresses/${id}/`
        return axios.delete(this.api + url)
    },
}

export default addresses