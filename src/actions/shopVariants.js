import axios from 'axios';

//Shop list
export const FETCH_SHOPVARIANTS = 'FETCH_SHOPVARIANTS';
export const FETCH_SHOPVARIANTS_SUCCESS = 'FETCH_SHOPVARIANTS_SUCCESS';
export const FETCH_SHOPVARIANTS_FAILURE = 'FETCH_SHOPVARIANTS_FAILURE';

//Create new shop
export const CREATE_SHOPVARIANT = 'CREATE_SHOPVARIANT';
export const CREATE_SHOPVARIANT_SUCCESS = 'CREATE_SHOPVARIANT_SUCCESS';
export const CREATE_SHOPVARIANT_FAILURE = 'CREATE_SHOPVARIANT_FAILURE';

//Fetch shop
export const FETCH_SHOPVARIANT = 'FETCH_SHOPVARIANT';
export const FETCH_SHOPVARIANT_SUCCESS = 'FETCH_SHOPVARIANT_SUCCESS';
export const FETCH_SHOPVARIANT_FAILURE = 'FETCH_SHOPVARIANT_FAILURE';

//Delete shop
export const DELETE_SHOPVARIANT = 'DELETE_SHOPVARIANT';
export const DELETE_SHOPVARIANT_SUCCESS = 'DELETE_SHOPVARIANT_SUCCESS';
export const DELETE_SHOPVARIANT_FAILURE = 'DELETE_SHOPVARIANT_FAILURE';

export const TOGGLE_ADDRESS_VISIBILITY = 'TOGGLE_ADDRESS_VISIBILITY';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchShopVariants() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/branch`,
        headers: []
    });

    return {
        type: FETCH_SHOPVARIANTS,
        payload: request
    };
}

export function fetchShopVariantsSuccess(shopVariants) {
    return {
        type: FETCH_SHOPVARIANTS_SUCCESS,
        payload: shopVariants
    };
}

export function fetchShopVariantsFailure(error) {
    return {
        type: FETCH_SHOPVARIANTS_FAILURE,
        payload: error
    };
}

export function createShopVariant(props, tokenFromStorage) {
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/branch`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: CREATE_SHOPVARIANT,
        payload: request
    };
}

export function createShopVariantSuccess(newShopVariant) {
    return {
        type: CREATE_SHOPVARIANT_SUCCESS,
        payload: newShopVariant
    };
}

export function createShopVariantFailure(error) {
    return {
        type: CREATE_SHOPVARIANT_FAILURE,
        payload: error
    };
}

export function fetchShopVariant(id) {
    const request = axios.get(`${ROOT_URL}/branch/${id}`);

    return {
        type: FETCH_SHOPVARIANT,
        payload: request
    };
}

export function fetchShopVariantSuccess(activeShopVariant) {
    return {
        type: FETCH_SHOPVARIANT_SUCCESS,
        payload: activeShopVariant
    };
}

export function fetchShopVariantFailure(error) {
    return {
        type: FETCH_SHOPVARIANT_FAILURE,
        payload: error
    };
}

export function deleteShopVariant(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/branch/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type: DELETE_SHOPVARIANT,
        payload: request
    };
}

export function deleteShopVariantSuccess(deletedShopVariant) {
    return {
        type: DELETE_SHOPVARIANT_SUCCESS,
        payload: deletedShopVariant
    };
}

export function deleteShopVariantFailure(response) {
    return {
        type: DELETE_SHOPVARIANT_FAILURE,
        payload: response
    };
}
export function toggleAddressVisibility(id){
    return {
        type: TOGGLE_ADDRESS_VISIBILITY,
        payload: id
    };
}