import React, { Component } from 'react';
import ShopVariantProductForm from './ShopVariantProductForm';
import {Link} from 'react-router';

class AdminShopVariantProducts extends Component {
    componentWillMount() {
        this.props.fetchProducts(this.props.shopVariantId);
        this.props.fetchCategories(this.props.shopVariantId);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newProduct.product !== null && !nextProps.newProduct.error
            || nextProps.deletedProduct.product !== null && !nextProps.deletedProduct.error){
            this.props.fetchProducts(this.props.shopVariantId);
        }
    }

    renderProducts(products) {
        return products.map((product) => {
            return (
                <li className="list-group-item" key={product.id}>
                    <label title={product.description}>{product.name}</label>
                    <Link to={'/admin/products/'+product.id}>
                        <button className="btn btn-info">Info</button>
                    </Link>
                    <button className="btn btn-danger" onClick={this.props.deleteProduct.bind(this,product.id)}>Delete</button>
                </li>
            );
        });
    }

    render() {
        const { products, loading, error } = this.props.productsList;

        if(loading) {
            return <div className="row">
                <h1>Products</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <h1>Products</h1>
                    <ul className="list-group">
                        {this.renderProducts(products)}
                    </ul>
                </div>
                <ShopVariantProductForm addProduct={this.props.addProduct} fetchCategories={this.props.fetchCategories} shopVariantId={this.props.shopVariantId} categories={this.props.categoriesList}/>
            </div>
        );
    }
}


export default AdminShopVariantProducts;