import { connect } from 'react-redux'
import { login, loginSuccess, loginFailure } from '../actions/auth';
import ProfilePage from '../components/ProfilePage';

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
                    dispatch(loginSuccess(response.payload.data));
                }
                else{
                    dispatch(loginFailure(response.payload.message));
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);