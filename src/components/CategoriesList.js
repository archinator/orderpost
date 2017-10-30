import React, { Component } from 'react';

class CategoriesList extends Component {
    componentWillMount() {
        this.props.fetchCategories(this.props.shopVariantId);
    }


    renderCategories(categories) {
        return categories.map((category) => {
            return (
                <li className="list-group-item" key={category.id}>
                    <div className="checkbox">
                        <label title={category.description}><input type="checkbox" onChange={this.props.toggleCategory.bind(this,category.id)} />{category.name}</label>
                    </div>

                </li>
            );
        });
    }

    render() {
        const { categories, loading, error } = this.props.categoriesList;

        if(loading) {
            return <div className="col-md-4">
                <h1>Categories</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="col-md-3">
                <h1>Categories</h1>
                <ul className="list-group">
                    {this.renderCategories(categories)}
                </ul>
            </div>
        );
    }
}


export default CategoriesList;