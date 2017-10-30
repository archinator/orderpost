import {
    FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS,  FETCH_PRODUCT_FAILURE,
    CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE

} from '../actions/products_admin';

const INITIAL_STATE = { productsList: {products: [], error:null, loading: false},
    newProduct:{product:null, error: null, loading: false},
    activeProduct:{product:null, error:null, loading: false},
    deletedProduct: {product: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_PRODUCTS:
            return { ...state, productsList: {products:[], error: null, loading: true} };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, productsList: {products: action.payload, error:null, loading: false},newProduct: {product: null},deletedProduct:{product: null} };
        case FETCH_PRODUCTS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, productsList: {products: [], error: error, loading: false} };

        case FETCH_PRODUCT:
            return { ...state, activeProduct:{...state.activeProduct, loading: true}};
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, activeProduct: {product: action.payload, error:null, loading: false}};
        case FETCH_PRODUCT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeProduct: {product: null, error:error, loading:false}};

        case CREATE_PRODUCT:
            return {...state, newProduct: {...state.newProduct, loading: true}}
        case CREATE_PRODUCT_SUCCESS:
            return {...state, newProduct: {product:action.payload, error:null, loading: false}}
        case CREATE_PRODUCT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, newProduct: {product:null, error:error, loading: false}}

        case DELETE_PRODUCT:
            return {...state, deletedProduct: {...state.deletedProduct, loading: true}}
        case DELETE_PRODUCT_SUCCESS:
            return {...state, deletedProduct: {product:action.payload, error:null, loading: false}}
        case DELETE_PRODUCT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, deletedProduct: {product:null, error:error, loading: false}}

        default:
            return state;
    }
}