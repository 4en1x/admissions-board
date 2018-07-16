import axios from 'axios';

function login(user) {
    return axios.post(`/rest/login`, user);
}

function register(user) {
    return axios.post(`/rest/register`, user);
}

function logout() {
    return axios.post(`/rest/logout`);
}

const userService = {
    login,
    logout,
    register
};

export default userService;
