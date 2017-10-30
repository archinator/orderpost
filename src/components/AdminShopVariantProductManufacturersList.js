import React, { Component } from 'react';
import {Link} from 'react-router';
import ShopVariantProductVariantForm from './ShopVariantProductVariantForm';

class AdminShopVariantProductVariantsList extends Component {
    componentWillMount() {
        this.props.fetchProductVariants(this.props.productId);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newProductVariant.productVariant !== null && !nextProps.newProductVariant.error
            || nextProps.deletedProductVariant.productVariant !== null && !nextProps.deletedProductVariant.error){
            this.props.fetchProductVariants(this.props.productId);
        }
    }

    renderProductVariants(productVariants) {
        return productVariants.map((productVariant) => {
            return (
                <li className="list-group-item" key={productVariant.id}>
                    <label title={productVariant.description}>{productVariant.name}</label>
                    <Link to={'/admin/products/'+productVariant.id}>
                        <button className="btn btn-info">Info</button>
                    </Link>
                    <button className="btn btn-danger" onClick={this.props.deleteProductVariant.bind(this,productVariant.id)}>Delete</button>
                </li>
            );
        });
    }

    render() {
        const { productVariants, loading, error } = this.props.productVariantsList;

        if(loading) {
            return <div className="row">
                <h1>ProductVariants</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <h1>ProductVariants</h1>
                    <ul className="list-group">
                        {this.renderProductVariants(productVariants)}
                    </ul>
                </div>
                <ShopVariantProductVariantForm addProductVariant={this.props.addProductVariant} productId={this.props.productId} />
            </div>
        );
    }
}


export default AdminShopVariantProductVariantsList;