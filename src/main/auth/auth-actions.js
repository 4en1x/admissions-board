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

export function login(user) {
    /** Until server up */
    if (user.login === 'admin' && user.password === 'password') {
        return (dispatch) => {
            dispatch(addUser({ login: 'admin', role: 'ADMIN', id: 1 }));
        };
    }

    if (user.login === 'entrant' && user.password === 'password') {
        return (dispatch) => {
            dispatch(addUser({ login: 'entrant', role: 'ENTRANT', id: 1 }));
        };
    }

    return (dispatch) => {
        userService.login(user).then((response) => {
            dispatch(addUser(response.data));
        });
    };
}

export function logout() {
    /** Until server up */
    return (dispatch) => {
        dispatch(removeUser());
    };

    return (dispatch) => {
        userService.logout().then(() => {
            dispatch(removeUser());
        });
    };
}

export function register(user) {
    return (dispatch) => {
        userService.register(user).then(() => {
            dispatch(registerUser());
        });
    };
}
