import { connect } from 'react-redux'
import { fetchProductVariants, fetchProductVariantsSuccess, fetchProductVariantsFailure,
    createProductVariant,createProductVariantSuccess,createProductVariantFailure,
    deleteProductVariant,deleteProductVariantSuccess,deleteProductVariantFailure
} from '../actions/productvariants_admin';
import AdminShopVariantProductVariantsList from '../components/AdminShopVariantProductVariantsList';

const mapStateToProps = (state) => {
    return {
        productVariantsList: state.productvariants_admin.productVariantsList,
        newProductVariant: state.productvariants_admin.newProductVariant,
        deletedProductVariant: state.productvariants_admin.deletedProductVariant
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductVariants: (id) => {
            dispatch(fetchProductVariants(id)).then((response) => {
                !response.error ? dispatch(fetchProductVariantsSuccess(response.payload.data)) : dispatch(fetchProductVariantsFailure(response.payload.message));
            });
        },
        addProductVariant: (data) => {
            dispatch(createProductVariant(data,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(createProductVariantSuccess(response.payload.data)) : dispatch(createProductVariantFailure(response.payload.message));
            });
        },
        deleteProductVariant: (id) => {
            dispatch(deleteProductVariant(id,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(deleteProductVariantSuccess(response.payload.data)) : dispatch(deleteProductVariantFailure(response.payload.message));
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminShopVariantProductVariantsList);