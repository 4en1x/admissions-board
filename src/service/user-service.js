import axios from 'axios';

function login(user) {
    return axios.post(`/rest/login`, user);
}

function register(user) {
    return axios.post(`/rest/register`, user);
}

function checkEmail(email) {
    return axios.post('/rest/email', email);
}

function isAuthorized() {
    return axios.get('/rest/username');
}

function logout() {
    return axios.post(`/rest/logout`);
}

const userService = {
    login,
    checkEmail,
    isAuthorized,
    logout,
    register
};

export default userService;
