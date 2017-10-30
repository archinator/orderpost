import { connect } from 'react-redux'
import { addOrder, addOrderSuccess, addOrderFailure } from '../actions/checkout';
import Checkout from '../components/Checkout';


const mapStateToProps = (state) => {
    return {
        order: state.checkout.order
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: () => {
            dispatch(addOrder(localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(addOrderSuccess(response.payload.data)) : dispatch(addOrderFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);