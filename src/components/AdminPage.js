import React,{Component} from 'react';
import AdminHeader from './AdminHeader';

class AdminPage extends Component {

    render() {
        return (
            <div className="row">
                <AdminHeader />
                {this.props.children}
            </div>
        )
    }
}

export default AdminPage;

