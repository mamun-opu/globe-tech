import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div className='navBar'>
            <div className='logo'>
                <img src="./images/globetech logo.png" alt="" />
            </div>
            <div className='menuBar'>
                <Link className='route home-nav' to = '/'>Home</Link>
                <Link className='route services-nav' to = '/services'>Services</Link>
                <Link className='route login-nav' to = '/login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;