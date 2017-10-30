import {
    FETCH_SHOPVARIANTS, FETCH_SHOPVARIANTS_SUCCESS, FETCH_SHOPVARIANTS_FAILURE,
    FETCH_SHOPVARIANT, FETCH_SHOPVARIANT_SUCCESS,  FETCH_SHOPVARIANT_FAILURE,
    CREATE_SHOPVARIANT, CREATE_SHOPVARIANT_SUCCESS, CREATE_SHOPVARIANT_FAILURE,
    DELETE_SHOPVARIANT, DELETE_SHOPVARIANT_SUCCESS, DELETE_SHOPVARIANT_FAILURE,
    TOGGLE_ADDRESS_VISIBILITY

} from '../actions/shopVariants';

const INITIAL_STATE = { shopVariantsList: {shopVariants: [], error:null, loading: false},
    newShopVariant:{shopVariant:null, error: null, loading: false},
    activeShopVariant:{shopVariant:null, error:null, loading: false},
    deletedShopVariant: {shopVariant: null, error:null, loading: false},
    availableFilters: [],
    activeFilters: []
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_SHOPVARIANTS:
            return { ...state, shopVariantsList: {shopVariants:[], error: null, loading: true} };
        case FETCH_SHOPVARIANTS_SUCCESS:
            return { ...state, shopVariantsList: {shopVariants: action.payload, error:null, loading: false} };
        case FETCH_SHOPVARIANTS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, shopVariantsList: {shopVariants: [], error: error, loading: false} };

        case FETCH_SHOPVARIANT:
            return { ...state, activeShopVariant:{...state.activeShopVariant, loading: true}};
        case FETCH_SHOPVARIANT_SUCCESS:
            return { ...state, activeShopVariant: {shopVariant: action.payload, error:null, loading: false}};
        case FETCH_SHOPVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeShopVariant: {shopVariant: null, error:error, loading:false}};

        case CREATE_SHOPVARIANT:
            return {...state, newShopVariant: {...state.newShopVariant, loading: true}}
        case CREATE_SHOPVARIANT_SUCCESS:
            return {...state, newShopVariant: {shopVariant:action.payload, error:null, loading: false}}
        case CREATE_SHOPVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, newShopVariant: {shopVariant:null, error:error, loading: false}}

        case DELETE_SHOPVARIANT:
            return {...state, deletedShopVariant: {...state.deletedShopVariant, loading: true}}
        case DELETE_SHOPVARIANT_SUCCESS:
            return {...state, deletedShopVariant: {shopVariant:action.payload, error:null, loading: false}}
        case DELETE_SHOPVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, deletedShopVariant: {shopVariant:null, error:error, loading: false}}
        case TOGGLE_ADDRESS_VISIBILITY:
            let shopVariant = state.shopVariantsList.shopVariants.find(x => x.id == action.payload);
            shopVariant.isAddressShown = !shopVariant.isAddressShown;
            return {...state,shopVariantsList: {shopVariants: state.shopVariantsList.shopVariants} }

        default:
            return state;
    }
}