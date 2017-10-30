import { connect } from 'react-redux'
import AdminPage from '../components/AdminPage';

const mapStateToProps = (state) => {
    return {
        error: state.auth.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);