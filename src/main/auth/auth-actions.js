import axios from 'axios';
import userService from '../../service/user-service';
axios.defaults.withCredentials = true;

const ADD_USER = 'ADD_USER';
const ADD_USER_ERROR = 'ADD_USER_ERROR';
const REMOVE_USER = 'REMOVE_USER';
const REGISTRATION = 'REGISTRATION';
const FAILED_LOGIN_WITH_COOKIES = 'FAILED_LOGIN_WITH_COOKIES';

function addUser(user) {
    return {
        type: ADD_USER,
        user
    };
}

function registerUser() {
    return {
        type: REGISTRATION
    };
}

function removeUser() {
    return {
        type: REMOVE_USER,
        user: {}
    };
}

function addUserError(user) {
    return {
        type: ADD_USER_ERROR,
        user
    };
}

export function login(user) {
    /** Until server up*/
    if (user.username === 'admin' && user.password === 'password') {
        return dispatch => {
            dispatch(addUser({ name: 'admin', role: 'admin', id: 1 }));
        };
    }

    if (user.username === 'user' && user.password === 'password') {
        return dispatch => {
            dispatch(addUser({ name: 'user', role: 'user', id: 1 }));
        };
    }

    return dispatch => {
        userService.login(user).then(response => {
            dispatch(addUser(response.data));
        });
    };
}

export function logout() {
    /** Until server up*/
    return dispatch => {
        dispatch(removeUser());
    };

    return dispatch => {
        userService.logout().then(() => {
            dispatch(removeUser());
        });
    };
}

export function register(user) {
    return dispatch => {
        userService.register(user).then(() => {
            dispatch(registerUser());
        });
    };
}

function loginWithCookies() {
    return {
        type: FAILED_LOGIN_WITH_COOKIES,
    }
}

export function isAuthorized() {
    return dispatch => {
        userService
            .isAuthorized()
            .then(res => {
                dispatch(addUser(res.data));
            })
            .catch(err => {
                dispatch(loginWithCookies());
                console.log(err)
            });
    };
}
