import { connect } from 'react-redux'
import { login, loginSuccess, loginFailure } from '../actions/auth';
import LoginPage from '../components/LoginPage';

const mapStateToProps = (state) => {
    return {
        error: state.auth.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => {
            dispatch(login(creds)).then((response) => {
                if(!response.error){
                    localStorage.setItem('access_token', response.payload.data.access_token);
                    localStorage.setItem('is_admin', response.payload.data.is_admin);
                    localStorage.setItem('sv', response.payload.data.sv);
                    dispatch(loginSuccess(response.payload.data));
                }
                else{
                    dispatch(loginFailure(response.payload.message));
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);