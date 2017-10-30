import React from 'react';
import Logo from './Logo'
import AuthContainer from '../containers/AuthContainer'

const Header = () => (
    <div className="row">
        <Logo />
        <AuthContainer />
    </div>
)

export default Header;
