import {
    ADD_ORDER,ADD_ORDER_SUCCESS,ADD_ORDER_FAILURE
} from '../actions/checkout';


const INITIAL_STATE = { order: {items: [], error:null, loading: false} };

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case ADD_ORDER:
            return { ...state, order: {items: [], error: null, loading: true} };
        case ADD_ORDER_SUCCESS:
            return { ...state, order: {items: action.payload, error:null, loading: false} };
        case ADD_ORDER_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, order: {items: [], error: error, loading: false} };

        default:
            return state;
    }
}