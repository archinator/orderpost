import React,{Component} from 'react';

class ShopVariantProductVariantForm extends Component {

    addProductVariant = () => {
        const name = this.refs.name.value;
        const desc = this.refs.desc.value;
        const orderMin = this.refs.orderMin.value;
        const orderMax = this.refs.orderMax.value;
        const price = this.refs.price.value;
        const sku = this.refs.sku.value;
        const isPublished = this.refs.isPublished.checked;
        const data = {name: name,description: desc,orderMaximumQuantity: orderMax,orderMinimumQuantity: orderMin,
            price: price, sku: sku,published: isPublished};
        this.props.addProduct(data);
    }


    render() {
        return (
            <div className="col-md-4">
                <p>Name</p>
                <input type="text" ref='name' placeholder="NAME"/>
                <p>Description</p>
                <textarea ref='desc' placeholder="DESCRIPTION"/>
                <p>Order minimum quantity</p>
                <input type='number' ref='orderMin' placeholder="1"/>
                <p>Order maximum quantity</p>
                <input type='number' ref='orderMax' placeholder="100"/>
                <p>Price</p>
                <input type='number' ref='price' placeholder="1"/>
                <p>Sku</p>
                <input type='text' ref='sku' placeholder="SKU"/>
                <div className="checkbox">
                    <label><input type="checkbox" ref='isPublished'/>Published</label>
                </div>
                <button className="btn btn-primary" onClick={this.addProductVariant}>Confirm</button>
                {this.props.error &&
                <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default ShopVariantProductVariantForm;

