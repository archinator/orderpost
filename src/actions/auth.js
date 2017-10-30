import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
export const LOGIN_GOOGLE_SUCCESS = 'LOGIN_GOOGLE_SUCCESS';
export const LOGIN_GOOGLE_FAILURE = 'LOGIN_GOOGLE_FAILURE';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


const ROOT_URL = 'http://localhost:61389/api';


export function login(creds) {
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    const userData = 'email='+creds.email+'&password='+creds.password;
    const request = axios.post(`${ROOT_URL}/token`,userData,headers);
    return {
        type: LOGIN,
        payload: request
    };
}
export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    }
}

export function register(creds) {
    var headers = {
        'Content-Type': 'application/json'
    };
    const request = axios.post(`${ROOT_URL}/account/register`,creds,headers);
    return {
        type: REGISTER,
        payload: request
    };
}
export function registerSuccess(user) {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    };
}

export function registerFailure(error) {
    return {
        type: REGISTER_FAILURE,
        payload: error
    };
}
