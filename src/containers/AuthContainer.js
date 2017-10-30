import { connect } from 'react-redux'
import { logout, logoutSuccess } from '../actions/auth';
import Auth from '../components/Auth';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAdmin: state.auth.isAdmin
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('is_admin');
            localStorage.removeItem('sv');
            dispatch(logoutSuccess());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);