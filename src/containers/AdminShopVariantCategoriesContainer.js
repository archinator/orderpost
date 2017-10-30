import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure,
    createCategory,createCategorySuccess,createCategoryFailure,
    deleteCategory,deleteCategorySuccess,deleteCategoryFailure
} from '../actions/categories_admin';
import AdminShopVariantCategories from '../components/AdminShopVariantCategories';

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categories_admin.categoriesList,
        newCategory: state.categories_admin.newCategory,
        deletedCategory: state.categories_admin.deletedCategory,
        shopVariantId: state.auth.sv
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (id) => {
            dispatch(fetchCategories(id)).then((response) => {
                !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.message));
            });
        },
        addCategory: (data) => {
            dispatch(createCategory(data,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(createCategorySuccess(response.payload.data)) : dispatch(createCategoryFailure(response.payload.message));
            });
        },
        deleteCategory: (id) => {
            dispatch(deleteCategory(id,localStorage.getItem('access_token'))).then((response) => {
                !response.error ? dispatch(deleteCategorySuccess(response.payload.data)) : dispatch(deleteCategoryFailure(response.payload.message));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminShopVariantCategories);