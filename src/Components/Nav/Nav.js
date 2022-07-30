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
                <Link className='route' to = '/'>Home</Link>
                <Link className='route' to = '/services'>Services</Link>
                <Link className='route' to = '/login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;