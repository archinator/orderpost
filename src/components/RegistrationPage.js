import React,{Component} from 'react';

class RegistrationPage extends Component {
    register = () => {
        const email = this.refs.email.value;
        const pwd = this.refs.pwd.value;
        const confirmPwd = this.refs.confirmPwd.value;
        const guid = this.refs.guid.value;
        const creds = {email: email,password: pwd, confirmPassword: confirmPwd, shopIdentifier: guid};
        this.props.register(creds);

    }


    render() {
        return (
            <div>
                {!this.props.success &&
                <div>
                    <p>Email</p>
                    <input type='email' ref='email' placeholder="EMAIL"/>
                    <p>Password</p>
                    <input type='password' ref='pwd' placeholder="PASSWORD"/>
                    <p>Confirm password</p>
                    <input type='password' ref='confirmPwd' placeholder="CONFIRM PASSWORD"/>
                    <p>Shop unique code</p>
                    <input type='text' ref='guid' placeholder="SHOP CODE" />
                    <button className="btn btn-primary" onClick={this.register}>Confirm</button>
                </div>
                    }
                {this.props.error &&
                <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default RegistrationPage;

