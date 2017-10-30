import React, { Component } from 'react';
import ShopVariantCategoryForm from './ShopVariantCategoryForm';

class AdminShopVariantCategories extends Component {
    componentWillMount() {
        this.props.fetchCategories(this.props.shopVariantId);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newCategory.category !== null && !nextProps.newCategory.error
        || nextProps.deletedCategory.category !== null && !nextProps.deletedCategory.error){
            this.props.fetchCategories(this.props.shopVariantId);
        }
    }


    renderCategories(categories) {
        return categories.map((category) => {
            return (
                <li className="list-group-item" key={category.id}>
                    <label title={category.description}>{category.name}</label>
                    <button className="btn btn-danger" onClick={this.props.deleteCategory.bind(this,category.id)}>Delete</button>
                </li>
            );
        });
    }

    render() {
        const { categories, loading, error } = this.props.categoriesList;

        if(loading) {
            return <div className="row">
                <h1>Categories</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <h1>Categories</h1>
                    <ul className="list-group">
                        {this.renderCategories(categories)}
                    </ul>
                </div>
                <ShopVariantCategoryForm addCategory={this.props.addCategory} />
            </div>
        );
    }
}


export default AdminShopVariantCategories;