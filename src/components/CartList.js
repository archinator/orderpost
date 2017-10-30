import React, { Component } from 'react';
import {Link} from 'react-router';
import CartItem from './CartItem';

class CartList extends Component {
    componentWillMount() {
        this.props.fetchCartItems();
    }

    renderCartItems(cartItems) {
        return cartItems.map((item) => {
            return (
                <CartItem key={item.id} data={item} />
            );
        });
    }

    render() {
        const { items, loading, error } = this.props.cartItems;

        if(loading) {
            return <div className="row">
                <h1>Cart</h1>
                <h3>Loading...</h3>
            </div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }

        return (
            <div className="row">
                <h1>Cart</h1>
                <ul className="list-group">
                    {this.renderCartItems(items)}
                </ul>
                <Link to={'/checkout'}>
                    <button className="btn btn-success">Buy</button>
                </Link>
            </div>
        );
    }
}


export default CartList;