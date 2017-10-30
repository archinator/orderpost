import { connect } from 'react-redux'
import { fetchCartItems, fetchCartItemsSuccess, fetchCartItemsFailure } from '../actions/cart';
import CartList from '../components/CartList';


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cart
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: () => {
            dispatch(fetchCartItems(localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(fetchCartItemsSuccess(response.payload.data)) : dispatch(fetchCartItemsFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);