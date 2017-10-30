import axios from 'axios';

//Product list
export const FETCH_PRODUCTVARIANTS = 'FETCH_PRODUCTVARIANTS';
export const FETCH_PRODUCTVARIANTS_SUCCESS = 'FETCH_PRODUCTVARIANTS_SUCCESS';
export const FETCH_PRODUCTVARIANTS_FAILURE = 'FETCH_PRODUCTVARIANTS_FAILURE';

//Create new product
export const CREATE_PRODUCTVARIANT = 'CREATE_PRODUCTVARIANT';
export const CREATE_PRODUCTVARIANT_SUCCESS = 'CREATE_PRODUCTVARIANT_SUCCESS';
export const CREATE_PRODUCTVARIANT_FAILURE = 'CREATE_PRODUCTVARIANT_FAILURE';

//Fetch product
export const FETCH_PRODUCTVARIANT = 'FETCH_PRODUCTVARIANT';
export const FETCH_PRODUCTVARIANT_SUCCESS = 'FETCH_PRODUCTVARIANT_SUCCESS';
export const FETCH_PRODUCTVARIANT_FAILURE = 'FETCH_PRODUCTVARIANT_FAILURE';

//Delete product
export const DELETE_PRODUCTVARIANT = 'DELETE_PRODUCTVARIANT';
export const DELETE_PRODUCTVARIANT_SUCCESS = 'DELETE_PRODUCTVARIANT_SUCCESS';
export const DELETE_PRODUCTVARIANT_FAILURE = 'DELETE_PRODUCTVARIANT_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchProductVariants(id) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/product/${id}/variants`,
        headers: []
    });

    return {
        type: FETCH_PRODUCTVARIANTS,
        payload: request
    };
}

export function fetchProductVariantsSuccess(productVariants) {
    return {
        type: FETCH_PRODUCTVARIANTS_SUCCESS,
        payload: productVariants
    };
}

export function fetchProductVariantsFailure(error) {
    return {
        type: FETCH_PRODUCTVARIANTS_FAILURE,
        payload: error
    };
}

export function createProductVariant(props, tokenFromStorage) {
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/product`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: CREATE_PRODUCTVARIANT,
        payload: request
    };
}

export function createProductVariantSuccess(newProductVariant) {
    return {
        type: CREATE_PRODUCTVARIANT_SUCCESS,
        payload: newProductVariant
    };
}

export function createProductVariantFailure(error) {
    return {
        type: CREATE_PRODUCTVARIANT_FAILURE,
        payload: error
    };
}

export function fetchProductVariant(id) {
    const request = axios.get(`${ROOT_URL}/product/${id}`);

    return {
        type: FETCH_PRODUCTVARIANT,
        payload: request
    };
}

export function fetchProductVariantSuccess(activeProductVariant) {
    return {
        type: FETCH_PRODUCTVARIANT_SUCCESS,
        payload: activeProductVariant
    };
}

export function fetchProductVariantFailure(error) {
    return {
        type: FETCH_PRODUCTVARIANT_FAILURE,
        payload: error
    };
}

export function deleteProductVariant(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/product/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type: DELETE_PRODUCTVARIANT,
        payload: request
    };
}

export function deleteProductVariantSuccess(deletedProductVariant) {
    return {
        type: DELETE_PRODUCTVARIANT_SUCCESS,
        payload: deletedProductVariant
    };
}

export function deleteProductVariantFailure(response) {
    return {
        type: DELETE_PRODUCTVARIANT_FAILURE,
        payload: response
    };
}