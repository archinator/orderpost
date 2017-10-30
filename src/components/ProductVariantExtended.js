import React,{Component} from 'react'

class ProductVariantExtended extends Component {
    componentWillMount(){
        this.props.fetchProductVariant(this.props.routeParams.id);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newCartItem.cartItem !== null && !nextProps.newCartItem.error){
            this.props.fetchCartAmount();
        }
    }

    render(){
        const {product, loading, error} = this.props.productVariant;

        return (
            <div>
                <h1>{product.name}</h1>
                <button className="btn btn-success" onClick={this.props.addToCart.bind(this,this.props.routeParams.id)}>Add to cart</button>
            </div>
        )
    }
}

export default ProductVariantExtended;