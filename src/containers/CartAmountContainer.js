import { connect } from 'react-redux'
import { fetchCartAmount, fetchCartAmountSuccess, fetchCartAmountFailure } from '../actions/cart';
import CartAmount from '../components/CartAmount';


const mapStateToProps = (state) => {
    return {
        cartAmount: state.cart.cartAmount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartAmount: () => {
            dispatch(fetchCartAmount(localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(fetchCartAmountSuccess(response.payload.data)) : dispatch(fetchCartAmountFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartAmount);