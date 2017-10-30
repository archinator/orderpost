import { connect } from 'react-redux'
import { fetchProduct, fetchProductSuccess, fetchProductFailure } from '../actions/products';
import { addToCart,addToCartSuccess,addToCartFailure,fetchCartAmount,fetchCartAmountSuccess,fetchCartAmountFailure } from '../actions/cart';
import ProductVariantExtended from '../components/ProductVariantExtended';


const mapStateToProps = (state) => {
    return {
        productVariant: state.products.activeProduct,
        newCartItem: state.cart.newCartItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductVariant: (id) => {
            dispatch(fetchProduct(id)).then((response) => {
                !response.error ? dispatch(fetchProductSuccess(response.payload.data)) : dispatch(fetchProductFailure(response.payload.message));
            });
        },
        addToCart: (id) => {
            dispatch(addToCart(id,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(addToCartSuccess(response.payload.data)) : dispatch(addToCartFailure(response.payload.message));
            });
        },
        fetchCartAmount: () => {
            dispatch(fetchCartAmount(localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(fetchCartAmountSuccess(response.payload.data)) : dispatch(fetchCartAmountFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductVariantExtended);