import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/categories';
import { toggleCategory } from '../actions/filters'
import CategoriesList from '../components/CategoriesList';

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categories.categoriesList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (id) => {
            dispatch(fetchCategories(id)).then((response) => {
                !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.message));
            });
        },
        toggleCategory: (categoryId) => {
            dispatch(toggleCategory(categoryId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);