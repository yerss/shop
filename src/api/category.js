import axios from 'axios'

const categories = {
    api: 'http://localhost:8000/api',

    getCategories () {
        const url = '/categories/'
        return axios.get(this.api + url, {})
    },
    addCategory (category) {
        const url = `/categories/`
        return axios.post(this.api + url, {
            ...category
        })
    },
    getCategory (id) {
        const url = `/categories/${id}`
        return axios.get(this.api + url, {})
    },
    editCategory (id, category) {
        const url = `/categories/${id}`
        return axios.put(this.api + url, {
            ...category
        })
    },
    deleteCategory (id) {
        const url = `/categories/${id}/`
        return axios.delete(this.api + url)
    },
}

export default categories