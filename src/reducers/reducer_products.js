 import {
    FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS,  FETCH_PRODUCT_FAILURE
} from '../actions/products_admin';

const INITIAL_STATE = { productsList: {products: [], error:null, loading: false},
    activeProduct:{product:{}, error:null, loading: false}
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_PRODUCTS:
            return { ...state, productsList: {products:[], error: null, loading: true} };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, productsList: {products: action.payload, error:null, loading: false} };
        case FETCH_PRODUCTS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, productsList: {products: [], error: error, loading: false} };

        case FETCH_PRODUCT:
            return { ...state, activeProduct:{...state.activeProduct, loading: true}};
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, activeProduct: {product: action.payload, error:null, loading: false}};
        case FETCH_PRODUCT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeProduct: {product: {}, error:error, loading:false}};

        default:
            return state;
    }
}