import React from 'react';

const CartItem = (props) => (
    <li className="list-group-item">
        <h3>{props.data.productVariant.name}</h3>
        <h5>{props.data.productVariant.sku}</h5>
        <h5>{props.data.productVariant.description}</h5>
        <h5>{props.data.productVariant.price}</h5>
        <h5>{props.data.quantity}</h5>
    </li>
)

export default CartItem;

