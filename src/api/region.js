import axios from 'axios'

const regions = {
    api: 'http://localhost:8000/api',

    getRegions () {
        const url = '/regions/'
        return axios.get(this.api + url, {})
    },
    addRegion (region) {
        const url = `/regions/`
        return axios.post(this.api + url, {
            ...region
        })
    },
    getRegion (id) {
        const url = `/regions/${id}`
        return axios.get(this.api + url, {})
    },
    editRegion (id, region) {
        const url = `/regions/${id}`
        return axios.put(this.api + url, {
            ...region
        })
    },
    deleteRegion (id) {
        const url = `/regions/${id}/`
        return axios.delete(this.api + url)
    },
}

export default regions