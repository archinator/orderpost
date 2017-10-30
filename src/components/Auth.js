import React,{Component} from 'react';
import {Link} from 'react-router'
import CartAmountContainer from '../containers/CartAmountContainer';


class Auth extends Component {
    logout = () => {
        this.props.logout();
    }
    render(){
        return (
            <div className="col-md-8">
                <div className="col-md-4">
                    {this.props.isAuthenticated &&
                    <Link to='/profile'>
                        <label>There will be user info</label>
                    </Link> }
                    {this.props.isAdmin &&
                    <Link to='/admin'>
                        <button className="btn btn-info">ADMIN</button>
                    </Link> }
                </div>
                <div className="col-md-4">
                    {!this.props.isAuthenticated &&
                    <Link to='/login'>
                        <button className="btn btn-primary">Login</button>
                    </Link> }
                    {!this.props.isAuthenticated &&
                    <Link to='/register'>
                        <button className="btn btn-primary">Register</button>
                    </Link>
                    }

                    {this.props.isAuthenticated &&
                    <Link to='/'>
                        <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                    </Link>
                    }
                </div>
                <div className="col-md-4">
                    {this.props.isAuthenticated &&
                    <CartAmountContainer />
                    }
                </div>
            </div>
        )
    }
}

export default Auth;
