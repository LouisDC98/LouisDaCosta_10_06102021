import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/';

class API {
    static async login(data) {
        return axios.post(`/user/login`, data);
    }
    static async signUp() {
        return axios.post(`/user/signup`);
    }
    static async userProfile() {
        return axios.post(`/user/profile`);
    }
    static async updateUserProfile() {
        return axios.put(`/user/profile`);
    }
}

export default API;
