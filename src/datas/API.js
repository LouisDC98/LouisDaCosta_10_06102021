import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/';

class API {
    static async login(data) {
        return axios.post(`/user/login`, data);
    }
    static async signUp() {
        return axios.post(`/user/signup`);
    }
    static async userProfile(token) {
        return axios.post(`/user/profile`, undefined, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static async updateUserProfile(data, token) {
        return axios.put(`/user/profile`, data, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}

export default API;
