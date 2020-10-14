import axios from 'axios'

const cities = {
    api: 'http://localhost:8000/api',

    getCities () {
        const url = '/cities/'
        return axios.get(this.api + url, {})
    },
    addCity (city) {
        const url = `/cities/`
        return axios.post(this.api + url, city)
    },
    getCity (id) {
        const url = `/cities/${id}`
        return axios.get(this.api + url, {})
    },
    editCity (id, city) {
        const url = `/cities/${id}`
        return axios.put(this.api + url, {
            ...city
        })
    },
    deleteCity (id) {
        const url = `/cities/${id}/`
        return axios.delete(this.api + url)
    },
}

export default cities