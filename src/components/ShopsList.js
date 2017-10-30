import React, { Component } from 'react';
import Shop from './Shop';

class ShopsList extends Component {
    componentWillMount() {
        this.props.fetchShops();
    }


    renderShops(shops) {
        return shops.map((shop) => {
            return (
                <Shop key={shop.id} data={shop} setShopFilter={this.props.setShopFilter}/>
            );
        });
    }

    render() {
        const { shops, loading, error } = this.props.shopsList;

        if(loading) {
            return <div className="col-md-8"><h1>Shops</h1><h3>Loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="col-md-12">
                <ul className="list-inline">
                    {this.renderShops(shops)}
                </ul>
            </div>
        );
    }
}


export default ShopsList;