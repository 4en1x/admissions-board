import axios from 'axios';

function login(user) {
    return axios.post('http://localhost:8888/login', user);
}

function register(user) {
    return axios.post('http://localhost:8888/register', user);
}

function logout() {
    return axios.post('http://localhost:8888/logout');
}

const userService = {
    login,
    logout,
    register,
};

export default userService;
