import { connect } from 'react-redux'
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure,
    createProduct,createProductSuccess,createProductFailure,
    deleteProduct,deleteProductSuccess,deleteProductFailure
} from '../actions/products_admin';
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure,} from '../actions/categories_admin';
import AdminShopVariantProductManufacturersList from '../components/AdminShopVariantProductManufacturersList';

const mapStateToProps = (state) => {
    return {
        productsList: state.products_admin.productsList,
        categoriesList: state.categories_admin.categoriesList,
        newProduct: state.products_admin.newProduct,
        deletedProduct: state.products_admin.deletedProduct,
        shopVariantId: state.auth.sv
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (id) => {
            dispatch(fetchProducts(id)).then((response) => {
                !response.error ? dispatch(fetchProductsSuccess(response.payload.data)) : dispatch(fetchProductsFailure(response.payload.message));
            });
        },
        addProduct: (data) => {
            dispatch(createProduct(data,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(createProductSuccess(response.payload.data)) : dispatch(createProductFailure(response.payload.message));
            });
        },
        deleteProduct: (id) => {
            dispatch(deleteProduct(id,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(deleteProductSuccess(response.payload.data)) : dispatch(deleteProductFailure(response.payload.message));
            })
        },
        fetchCategories: (id) => {
            dispatch(fetchCategories(id)).then((response) => {
                !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminShopVariantProductManufacturersList);