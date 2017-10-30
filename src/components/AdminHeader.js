import React from 'react';
import {Link} from 'react-router';

const AdminHeader = () => (
    <div className="row">
        <ul className="list-inline">
            <li className="list-inline-item">
                <Link to="/admin/dashboard">
                    <p>Dashboard</p>
                </Link>
            </li>
            <li className="list-inline-item">
                <Link to="/admin/categories">
                    <p>Categories</p>
                </Link>
            </li>
            <li className="list-inline-item">
                <Link to="/admin/products">
                    <p>Products</p>
                </Link>
            </li>
        </ul>
    </div>
)

export default AdminHeader;
