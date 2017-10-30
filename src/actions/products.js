import axios from 'axios';

//Product list
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//Fetch product
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchProducts(id) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/branch/${id}/variants`,
        headers: []
    });

    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
}

export function fetchProductsFailure(error) {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
}

export function fetchProduct(id) {
    const request = axios.get(`${ROOT_URL}/variant/${id}`);

    return {
        type: FETCH_PRODUCT,
        payload: request
    };
}

export function fetchProductSuccess(activeProduct) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: activeProduct
    };
}

export function fetchProductFailure(error) {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    };
}