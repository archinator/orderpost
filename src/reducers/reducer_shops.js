import {
    FETCH_SHOPS, FETCH_SHOPS_SUCCESS, FETCH_SHOPS_FAILURE,
    FETCH_SHOP, FETCH_SHOP_SUCCESS,  FETCH_SHOP_FAILURE,
    CREATE_SHOP, CREATE_SHOP_SUCCESS, CREATE_SHOP_FAILURE,
    DELETE_SHOP, DELETE_SHOP_SUCCESS, DELETE_SHOP_FAILURE

} from '../actions/shops';
import { SET_SHOP_FILTER } from '../actions/filters'

const INITIAL_STATE = { shopsList: {shops: [], error:null, loading: false},
    newShop:{shop:null, error: null, loading: false},
    activeShop:{shop:null, error:null, loading: false},
    deletedShop: {shop: null, error:null, loading: false},
    activeShopFilter: 0
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_SHOPS:
            return { ...state, shopsList: {shops:[], error: null, loading: true} };
        case FETCH_SHOPS_SUCCESS:
            return { ...state, shopsList: {shops: action.payload, error:null, loading: false} };
        case FETCH_SHOPS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, shopsList: {shops: [], error: error, loading: false} };

        case FETCH_SHOP:
            return { ...state, activeShop:{...state.activeShop, loading: true}};
        case FETCH_SHOP_SUCCESS:
            return { ...state, activeShop: {shop: action.payload, error:null, loading: false}};
        case FETCH_SHOP_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeShop: {shop: null, error:error, loading:false}};

        case CREATE_SHOP:
            return {...state, newShop: {...state.newShop, loading: true}}
        case CREATE_SHOP_SUCCESS:
            return {...state, newShop: {shop:action.payload, error:null, loading: false}}
        case CREATE_SHOP_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, newShop: {shop:null, error:error, loading: false}}

        case DELETE_SHOP:
            return {...state, deletedShop: {...state.deletedShop, loading: true}}
        case DELETE_SHOP_SUCCESS:
            return {...state, deletedShop: {shop:action.payload, error:null, loading: false}}
        case DELETE_SHOP_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, deletedShop: {shop:null, error:error, loading: false}}
        case SET_SHOP_FILTER:
            return {...state,activeShopFilter: action.payload}

        default:
            return state;
    }
}