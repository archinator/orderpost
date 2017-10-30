import React from 'react';

const Shop = (props) => (
    <li className="list-inline-item" key={props.data.id} onClick={props.setShopFilter.bind(this,props.data.id)}>
        <h2>{props.data.name}</h2>
        <h5>{props.data.description}</h5>
    </li>
)

export default Shop;

