import {
    FETCH_CART_AMOUNT, FETCH_CART_AMOUNT_SUCCESS, FETCH_CART_AMOUNT_FAILURE,
    ADD_TO_CART,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,
    FETCH_CART_ITEMS,FETCH_CART_ITEMS_SUCCESS,FETCH_CART_ITEMS_FAILURE
} from '../actions/cart';


const INITIAL_STATE = { cart: {items: [], error:null, loading: false},
    cartAmount:{amount: -1, error: null, loading: false},
    newCartItem:{cartItem:{},error: null, loading: false}};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_CART_AMOUNT:
            return { ...state, cartAmount: {amount:-1, error: null, loading: true} };
        case FETCH_CART_AMOUNT_SUCCESS:
            return { ...state, cartAmount: {amount: action.payload, error:null, loading: false} };
        case FETCH_CART_AMOUNT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, cartAmount: {amount: -1, error: error, loading: false} };
        case ADD_TO_CART:
            return { ...state, newCartItem: {error: null, loading: true} };
        case ADD_TO_CART_SUCCESS:
            return { ...state, newCartItem: {cartItem: action.payload, error:null, loading: false} };
        case ADD_TO_CART_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, newCartItem: {cartItem: {}, error: error, loading: false} };
        case FETCH_CART_ITEMS:
            return { ...state, cart: {items:[], error: null, loading: true} };
        case FETCH_CART_ITEMS_SUCCESS:
            return { ...state, cart: {items: action.payload, error:null, loading: false} };
        case FETCH_CART_ITEMS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, cart: {amount: [], error: error, loading: false} };

        default:
            return state;
    }
}