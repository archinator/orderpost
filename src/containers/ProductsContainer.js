import { connect } from 'react-redux'
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure } from '../actions/products';
import ProductsList from '../components/ProductsList';


const mapStateToProps = (state) => {
    return {
        productsList: state.products.productsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (id) => {
            dispatch(fetchProducts(id)).then((response) => {
                !response.error ? dispatch(fetchProductsSuccess(response.payload.data)) : dispatch(fetchProductsFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);