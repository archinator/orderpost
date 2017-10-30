import { connect } from 'react-redux'
import { register, registerSuccess, registerFailure,login,loginSuccess,loginFailure } from '../actions/auth';
import RegistrationPage from '../components/RegistrationPage';

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        success: state.auth.success
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (creds) => {
            if(creds.password !== creds.confirmPassword){
                dispatch(registerFailure('Password compare failed.'));
                return;
            }
            dispatch(register(creds)).then((response) => {
                if(!response.error){
                    dispatch(registerSuccess(response.payload.data));
                }
                else{
                    dispatch(registerFailure(response.payload.message));
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);