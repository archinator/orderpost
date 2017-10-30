import axios from 'axios';

//Category list
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

//Fetch category
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

const ROOT_URL = 'http://localhost:61389/api';

export function fetchCategories(id) {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/branch/${id}/categories`,
        headers: []
    });

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    };
}

export function fetchCategoriesFailure(error) {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    };
}

export function fetchCategory(id) {
    const request = axios.get(`${ROOT_URL}/category/${id}`);

    return {
        type: FETCH_CATEGORY,
        payload: request
    };
}

export function fetchCategorySuccess(activeCategory) {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: activeCategory
    };
}

export function fetchCategoryFailure(error) {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: error
    };
}
