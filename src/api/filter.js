import axios from 'axios'

const filter = {
    api: 'http://localhost:8000/api',

    getFilterGroups () {
        const url = '/filterGroups/'
        return axios.get(this.api + url, {})
    },
    addFilterGroup (filterGroup) {
        const url = `/filterGroups/`
        return axios.post(this.api + url, {
            ...filterGroup
        })
    },
    getFilterGroup (id) {
        const url = `/filterGroups/${id}`
        return axios.get(this.api + url, {})
    },
    editFilterGroup (id, filterGroup) {
        const url = `/filterGroups/${id}`
        return axios.put(this.api + url, {
            ...filterGroup
        })
    },
    deleteFilterGroup (id) {
        const url = `/filterGroups/${id}/`
        return axios.delete(this.api + url)
    },

    getFilterValues () {
        const url = '/filterValues/'
        return axios.get(this.api + url, {})
    },
    addFilterValue (filterValue) {
        const url = `/filterValues/`
        return axios.post(this.api + url, {
            ...filterValue
        })
    },
    getFilterValue (id) {
        const url = `/filterValues/${id}`
        return axios.get(this.api + url, {})
    },
    editFilterValue (id, filterValue) {
        const url = `/filterValues/${id}`
        return axios.put(this.api + url, {
            ...filterValue
        })
    },
    deleteFilterValue (id) {
        const url = `/filterValues/${id}/`
        return axios.delete(this.api + url)
    },
}

export default filter