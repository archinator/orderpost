import {
    FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS,  FETCH_CATEGORY_FAILURE,
    CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAILURE,
    DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE

} from '../actions/categories_admin';
import { TOGGLE_CATEGORY} from '../actions/filters';


const INITIAL_STATE = { categoriesList: {categories: [], error:null, loading: false},
    newCategory:{category:null, error: null, loading: false},
    activeCategory:{category:null, error:null, loading: false},
    deletedCategory: {category: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_CATEGORIES:
            return { ...state, categoriesList: {categories:[], error: null, loading: true} };
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, categoriesList: {categories: action.payload, error:null, loading: false},newCategory: {category: null},deletedCategory:{category: null} };
        case FETCH_CATEGORIES_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, categoriesList: {categories: [], error: error, loading: false} };

        case FETCH_CATEGORY:
            return { ...state, activeCategory:{...state.activeCategory, loading: true}};
        case FETCH_CATEGORY_SUCCESS:
            return { ...state, activeCategory: {category: action.payload, error:null, loading: false}};
        case FETCH_CATEGORY_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeCategory: {category: null, error:error, loading:false}};

        case CREATE_CATEGORY:
            return {...state, newCategory: {...state.newCategory, loading: true}}
        case CREATE_CATEGORY_SUCCESS:
            return {...state, newCategory: {category:action.payload, error:null, loading: false}}
        case CREATE_CATEGORY_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, newCategory: {category:null, error:error, loading: false}}

        case DELETE_CATEGORY:
            return {...state, deletedCategory: {...state.deletedCategory, loading: true}}
        case DELETE_CATEGORY_SUCCESS:
            return {...state, deletedCategory: {category:action.payload, error:null, loading: false}}
        case DELETE_CATEGORY_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, deletedCategory: {category:null, error:error, loading: false}}
        case TOGGLE_CATEGORY:
            let category = state.categoriesList.categories.find(x => x.id == action.payload);
            category.isFiltered = !category.isFiltered;
            return {...state,categoriesList: {categories: state.categoriesList.categories}};

        default:
            return state;
    }
}