import React, { Component } from 'react';

class Checkout extends Component {

    render() {

        return (
            <div className="row">
                <h1>Checkout</h1>
                <button className="btn btn-success" onClick={this.props.addOrder}>Make order</button>
            </div>
        );
    }
}


export default Checkout;