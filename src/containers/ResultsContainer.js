import { connect } from 'react-redux'
import { fetchShopVariants, fetchShopVariantsSuccess, fetchShopVariantsFailure, toggleAddressVisibility } from '../actions/shopVariants';
import ResultsList from '../components/ResultsList'

const mapStateToProps = (state) => {
    return {
        shopVariantsList: state.shopVariants.shopVariantsList,
        activeShopFilter: state.shops.activeShopFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShopVariants: () => {
            dispatch(fetchShopVariants()).then((response) => {
                !response.error ? dispatch(fetchShopVariantsSuccess(response.payload.data)) : dispatch(fetchShopVariantsFailure(response.payload.message));
            });
        },
        toggleAddressVisibility: (shopVariantId) => {
            dispatch(toggleAddressVisibility(shopVariantId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);