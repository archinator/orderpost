import React, { Component } from 'react';
import ShopVariant from './ShopVariant';

class ResultsList extends Component {
    componentWillMount() {
        this.props.fetchShopVariants();
    }


    renderShopVariants(shopVariants) {
        return shopVariants.filter(x => this.props.activeShopFilter != 0 ? x.shop.id == this.props.activeShopFilter : true).map((shopVariant) => {
            return (
                <ShopVariant key={shopVariant.id} data={shopVariant} toggleAddressVisibility={this.props.toggleAddressVisibility} />
            );
        });
    }

    render() {
        const { shopVariants, loading, error } = this.props.shopVariantsList;

        if(loading) {
            return <div className="col-md-8">
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="col-md-12">
                <ul className="list-group">
                    {this.renderShopVariants(shopVariants)}
                </ul>
            </div>
        );
    }
}


export default ResultsList;