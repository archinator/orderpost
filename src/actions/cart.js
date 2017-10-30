import axios from 'axios';

export const FETCH_CART_AMOUNT = 'FETCH_CART_AMOUNT';
export const FETCH_CART_AMOUNT_SUCCESS = 'FETCH_CART_AMOUNT_SUCCESS';
export const FETCH_CART_AMOUNT_FAILURE = 'FETCH_CART_AMOUNT_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS';
export const FETCH_CART_ITEMS_FAILURE = 'FETCH_CART_ITEMS_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchCartAmount(tokenFromStorage) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/cart/amount`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: FETCH_CART_AMOUNT,
        payload: request
    };
}

export function fetchCartAmountSuccess(amount) {
    return {
        type: FETCH_CART_AMOUNT_SUCCESS,
        payload: amount
    };
}

export function fetchCartAmountFailure(error) {
    return {
        type: FETCH_CART_AMOUNT_FAILURE,
        payload: error
    };
}

export function addToCart(id,tokenFromStorage) {
    const request = axios({
        method: 'put',
        url: `${ROOT_URL}/cart/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: ADD_TO_CART,
        payload: request
    };
}

export function addToCartSuccess(result) {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: result
    };
}

export function addToCartFailure(error) {
    return {
        type: ADD_TO_CART_FAILURE,
        payload: error
    };
}

export function fetchCartItems(tokenFromStorage) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/cart`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: FETCH_CART_ITEMS,
        payload: request
    };
}

export function fetchCartItemsSuccess(result) {
    return {
        type: FETCH_CART_ITEMS_SUCCESS,
        payload: result
    };
}

export function fetchCartItemsFailure(error) {
    return {
        type: FETCH_CART_ITEMS_FAILURE,
        payload: error
    };
}