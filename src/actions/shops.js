import axios from 'axios';

//Shop list
export const FETCH_SHOPS = 'FETCH_SHOPS';
export const FETCH_SHOPS_SUCCESS = 'FETCH_SHOPS_SUCCESS';
export const FETCH_SHOPS_FAILURE = 'FETCH_SHOPS_FAILURE';

//Create new shop
export const CREATE_SHOP = 'CREATE_SHOP';
export const CREATE_SHOP_SUCCESS = 'CREATE_SHOP_SUCCESS';
export const CREATE_SHOP_FAILURE = 'CREATE_SHOP_FAILURE';

//Fetch shop
export const FETCH_SHOP = 'FETCH_SHOP';
export const FETCH_SHOP_SUCCESS = 'FETCH_SHOP_SUCCESS';
export const FETCH_SHOP_FAILURE = 'FETCH_SHOP_FAILURE';

//Delete shop
export const DELETE_SHOP = 'DELETE_SHOP';
export const DELETE_SHOP_SUCCESS = 'DELETE_SHOP_SUCCESS';
export const DELETE_SHOP_FAILURE = 'DELETE_SHOP_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchShops() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/shop`,
        headers: []
    });

    return {
        type: FETCH_SHOPS,
        payload: request
    };
}

export function fetchShopsSuccess(shops) {
    return {
        type: FETCH_SHOPS_SUCCESS,
        payload: shops
    };
}

export function fetchShopsFailure(error) {
    return {
        type: FETCH_SHOPS_FAILURE,
        payload: error
    };
}

export function createShop(props, tokenFromStorage) {
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/shop`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: CREATE_SHOP,
        payload: request
    };
}

export function createShopSuccess(newShop) {
    return {
        type: CREATE_SHOP_SUCCESS,
        payload: newShop
    };
}

export function createShopFailure(error) {
    return {
        type: CREATE_SHOP_FAILURE,
        payload: error
    };
}

export function fetchShop(id) {
    const request = axios.get(`${ROOT_URL}/shop/${id}`);

    return {
        type: FETCH_SHOP,
        payload: request
    };
}

export function fetchShopSuccess(activeShop) {
    return {
        type: FETCH_SHOP_SUCCESS,
        payload: activeShop
    };
}

export function fetchShopFailure(error) {
    return {
        type: FETCH_SHOP_FAILURE,
        payload: error
    };
}

export function deleteShop(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/shop/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type: DELETE_SHOP,
        payload: request
    };
}

export function deleteShopSuccess(deletedShop) {
    return {
        type: DELETE_SHOP_SUCCESS,
        payload: deletedShop
    };
}

export function deleteShopFailure(response) {
    return {
        type: DELETE_SHOP_FAILURE,
        payload: response
    };
}