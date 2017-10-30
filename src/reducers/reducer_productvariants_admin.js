import {
    FETCH_PRODUCTVARIANTS, FETCH_PRODUCTVARIANTS_SUCCESS, FETCH_PRODUCTVARIANTS_FAILURE,
    FETCH_PRODUCTVARIANT, FETCH_PRODUCTVARIANT_SUCCESS,  FETCH_PRODUCTVARIANT_FAILURE,
    CREATE_PRODUCTVARIANT, CREATE_PRODUCTVARIANT_SUCCESS, CREATE_PRODUCTVARIANT_FAILURE,
    DELETE_PRODUCTVARIANT, DELETE_PRODUCTVARIANT_SUCCESS, DELETE_PRODUCTVARIANT_FAILURE

} from '../actions/productvariants_admin';

const INITIAL_STATE = { productVariantsList: {productVariants: [], error:null, loading: false},
    newProductVariant:{productVariant:null, error: null, loading: false},
    activeProductVariant:{productVariant:null, error:null, loading: false},
    deletedProductVariant: {productVariant: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_PRODUCTVARIANTS:
            return { ...state, productVariantsList: {productVariants:[], error: null, loading: true} };
        case FETCH_PRODUCTVARIANTS_SUCCESS:
            return { ...state, productVariantsList: {productVariants: action.payload, error:null, loading: false},newProductVariant: {productVariant: null},deletedProductVariant:{productVariant: null} };
        case FETCH_PRODUCTVARIANTS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, productVariantsList: {productVariants: [], error: error, loading: false} };

        case FETCH_PRODUCTVARIANT:
            return { ...state, activeProductVariant:{...state.activeProductVariant, loading: true}};
        case FETCH_PRODUCTVARIANT_SUCCESS:
            return { ...state, activeProductVariant: {productVariant: action.payload, error:null, loading: false}};
        case FETCH_PRODUCTVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, activeProductVariant: {product: null, error:error, loading:false}};

        case CREATE_PRODUCTVARIANT:
            return {...state, newProductVariant: {...state.newProductVariant, loading: true}}
        case CREATE_PRODUCTVARIANT_SUCCESS:
            return {...state, newProductVariant: {productVariant:action.payload, error:null, loading: false}}
        case CREATE_PRODUCTVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, newProductVariant: {productVariant:null, error:error, loading: false}}

        case DELETE_PRODUCTVARIANT:
            return {...state, deletedProductVariant: {...state.deletedProductVariant, loading: true}}
        case DELETE_PRODUCTVARIANT_SUCCESS:
            return {...state, deletedProductVariant: {productVariant:action.payload, error:null, loading: false}}
        case DELETE_PRODUCTVARIANT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, deletedProductVariant: {productVariant:null, error:error, loading: false}}

        default:
            return state;
    }
}