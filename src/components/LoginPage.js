import React,{Component} from 'react';
import {Link} from 'react-router';
import { GoogleLogin } from 'react-google-login-component';

class LoginPage extends Component {
    login = () => {
        const email = this.refs.email.value;
        const pwd = this.refs.pwd.value;
        const creds = {email: email,password: pwd};
        this.props.login(creds);
    }
    responseGoogle = (googleUser) => {
        var id_token = googleUser.getAuthResponse().id_token;
        console.log({accessToken: id_token});
    }

    render() {
        return (
            <div>
                <p>Email</p>
                <input type="email" ref='email' placeholder="EMAIL"/>
                <p>Password</p>
                <input type="password" ref='pwd' placeholder="PASSWORD"/>
                <Link to="/profile">
                    <button className="btn btn-primary" onClick={this.login}>Confirm</button>
                </Link>
                <GoogleLogin socialId="839263368269-4q0f0eo614bv6u2asr0qvl7m3hf37jgj.apps.googleusercontent.com"
                             className="google-login"
                             scope="profile"
                             fetchBasicProfile={false}
                             responseHandler={this.responseGoogle}
                             buttonText="Login With Google"
                />
                <a href="#" onClick={this.onSignOut}>Sign out</a>
                {this.props.error &&
                <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default LoginPage;

