import React from 'react';
import {Link} from 'react-router';

const ProductVariant = (props) => (
    <li className="list-group-item" >
        <Link to={'/variant/'+props.data.id}>
            <h2>{props.data.name}</h2>
        </Link>
        <h5>{props.data.description}</h5>
    </li>
)

export default ProductVariant;

