import axios from 'axios';
import userService from '../../service/user-service';

axios.defaults.withCredentials = true;

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const REGISTRATION = 'REGISTRATION';

function addUser(user) {
    return {
        type: ADD_USER,
        user,
    };
}

function registerUser() {
    return {
        type: REGISTRATION,
    };
}

function removeUser() {
    return {
        type: REMOVE_USER,
        user: {},
    };
}

export function login(user, handler) {
    return (dispatch) => {
        userService.login(user).then((response) => {
            dispatch(addUser(response.data));
        }, (error) => {
            handler(error.toString());
        });
    };
}

export function logout(handler) {
    return (dispatch) => {
        userService.logout().then(() => {
            dispatch(removeUser());
        }, (error) => {
            handler(error.toString());
        });
    };
}

export function register(user, handler) {
    return (dispatch) => {
        userService.register(user).then(() => {
            dispatch(registerUser());
        }, (error) => {
            handler(error.toString());
        });
    };
}
