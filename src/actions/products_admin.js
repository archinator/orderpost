import axios from 'axios';

//Product list
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//Create new product
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

//Fetch product
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

//Delete product
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchProducts(id) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/branch/${id}/products`,
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

export function createProduct(props, tokenFromStorage) {
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/product`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: CREATE_PRODUCT,
        payload: request
    };
}

export function createProductSuccess(newProduct) {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        payload: newProduct
    };
}

export function createProductFailure(error) {
    return {
        type: CREATE_PRODUCT_FAILURE,
        payload: error
    };
}

export function fetchProduct(id) {
    const request = axios.get(`${ROOT_URL}/product/${id}`);

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

export function deleteProduct(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/product/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type: DELETE_PRODUCT,
        payload: request
    };
}

export function deleteProductSuccess(deletedProduct) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: deletedProduct
    };
}

export function deleteProductFailure(response) {
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: response
    };
}