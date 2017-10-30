import { connect } from 'react-redux'
import { fetchShops, fetchShopsSuccess, fetchShopsFailure } from '../actions/shops';
import { setShopFilter } from  '../actions/filters'
import ShopsList from '../components/ShopsList';


const mapStateToProps = (state) => {
    return {
        shopsList: state.shops.shopsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShops: () => {
            dispatch(fetchShops()).then((response) => {
                !response.error ? dispatch(fetchShopsSuccess(response.payload.data)) : dispatch(fetchShopsFailure(response.payload.message));
            });
        },
        setShopFilter: (shopId) => {
            dispatch(setShopFilter(shopId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);