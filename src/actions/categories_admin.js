import axios from 'axios';

//Category list
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

//Create new category
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

//Fetch category
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

//Delete category
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';

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

export function createCategory(props, tokenFromStorage) {
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/category`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });

    return {
        type: CREATE_CATEGORY,
        payload: request
    };
}

export function createCategorySuccess(newCategory) {
    return {
        type: CREATE_CATEGORY_SUCCESS,
        payload: newCategory
    };
}

export function createCategoryFailure(error) {
    return {
        type: CREATE_CATEGORY_FAILURE,
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

export function deleteCategory(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/category/${id}`,
        headers: {
            'Authorization': `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type: DELETE_CATEGORY,
        payload: request
    };
}

export function deleteCategorySuccess(deletedCategory) {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload: deletedCategory
    };
}

export function deleteCategoryFailure(response) {
    return {
        type: DELETE_CATEGORY_FAILURE,
        payload: response
    };
}