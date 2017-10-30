import {
    LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE,
    LOGOUT,LOGOUT_SUCCESS,LOGOUT_FAILURE,
    REGISTER,REGISTER_SUCCESS,REGISTER_FAILURE
} from '../actions/auth';

const INITIAL_STATE = { isAuthenticated : localStorage.getItem('access_token') ? true : false,isAdmin: localStorage.getItem('is_admin'),sv: localStorage.getItem('sv'),error:null, loading: false,success: null
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case LOGIN:
            return { ...state, error: null, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated:true,isAdmin: action.payload.is_admin, sv:action.payload.sv, error:null, loading: false };
        case LOGIN_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, error: error, loading: false };
        case LOGOUT:
            return { ...state, loading: true};
        case LOGOUT_SUCCESS:
            return { ...state, isAuthenticated:false,isAdmin:false,error:null, loading: false};
        case REGISTER:
            return { ...state, error: null, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, error:null,success:true, loading: false };
        case REGISTER_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, error: error, loading: false };

        default:
            return state;
    }
}