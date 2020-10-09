import axios from 'axios'

export default {
    api: 'http://localhost:8000/api',

    login (params) {
        const uri = '/login/'
        let params1 = new URLSearchParams();
        params1.append('email', params.email);
        params1.append('password', params.password);
        return axios.post(this.api + uri, params1);
    },
    registration (params) {
        const uri = '/register/'
        let params1 = new URLSearchParams();
        params1.append('name', params.name);
        params1.append('email', params.email);
        params1.append('password', params.password);
        return axios.post(this.api + uri, params1);
    },
    resetPassword (params) {
        const uri = '/resetPassword/'
        let params1 = new URLSearchParams();
        params1.append('email', params.email);
        return axios.post(this.api + uri, params1);
    }
}