import React from 'react';
import {Link} from 'react-router'

const ShopVariant = (props) => (
    <li className="list-group-item" key={props.data.id}>
        <h2>{props.data.shop.name}
        <button className="btn-primary" onClick={props.toggleAddressVisibility.bind(this,props.data.id)}>Show</button>
            <Link to={'/branch/'+props.data.id}>Go to shop</Link>
        </h2>
        <h5>{props.data.description}</h5>
        <div style={{display:  props.data.isAddressShown ? 'block' : 'none' }}  >
            <h5>{props.data.address.city.country.name}</h5>
            <h5>{props.data.address.city.name}</h5>
            <h5>{props.data.address.street}</h5>
            <h5>{props.data.address.apt}</h5>
            <h5>{props.data.address.phoneNumber}</h5>
        </div>
    </li>
)

export default ShopVariant;

