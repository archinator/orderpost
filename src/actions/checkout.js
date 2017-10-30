import axios from 'axios';

export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAILURE = 'ADD_ORDER_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function addOrder(tokenFromStorage) {
    const request = axios({
        method: 'post',
        url: `${ROOT_URL}/checkout`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: ADD_ORDER,
        payload: request
    };
}

export function addOrderSuccess(result) {
    return {
        type: ADD_ORDER_SUCCESS,
        payload: result
    };
}

export function addOrderFailure(error) {
    return {
        type: ADD_ORDER_FAILURE,
        payload: error
    };
}
