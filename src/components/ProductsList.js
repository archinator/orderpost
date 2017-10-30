import React, { Component } from 'react';
import ProductVariant from './ProductVariant';

class ProductsList extends Component {
    componentWillMount() {
        this.props.fetchProducts(this.props.shopVariantId);
    }


    renderProducts(products) {
        return products.map((product) => {
            return (
                <ProductVariant key={product.id} data={product} />
            );
        });
    }

    render() {
        const { products, loading, error } = this.props.productsList;

        if(loading) {
            return <div className="col-md-4">
                <h1>Products</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="col-md-3">
                <h1>Products</h1>
                <ul className="list-group">
                    {this.renderProducts(products)}
                </ul>
            </div>
        );
    }
}

export default ProductsList;