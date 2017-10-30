import React,{Component} from 'react';
import {Link} from 'react-router';

class CartAmount extends Component {
    componentWillMount(){
        this.props.fetchCartAmount();
    }
    render(){
        const {amount,loading,error} = this.props.cartAmount;
        if(loading) {
            return <p>Loading</p>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error}</div>
        }
        return (
            <Link to={'/cart'}>
                <button className="btn btn-success">Cart <span className="badge">{amount}</span></button>
            </Link>
            )
    }
}

export default CartAmount;
