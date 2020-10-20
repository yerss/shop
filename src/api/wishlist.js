import axios from 'axios'

const likes = {
    api: 'http://localhost:8000/api',

    getLikes () {
        const url = '/users/likes/'
        return axios.get(this.api + url, {})
    },
    addLike (id) {
        const url = `/products/${id}/like/`
        return axios.post(this.api + url, {
            ...like
        })
    },
    deleteLike (id) {
        const url = `/products/${id}/like/`
        return axios.delete(this.api + url)
    },
}

export default likes