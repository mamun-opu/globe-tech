import React from 'react';
import './Nav.css';
import {Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const history = useLocation();

    
    return (
        <div className='navBar'>
            {
                !(history.pathname === "/services") ? 
                <div className='logo'>
                    <img src="./images/globetech logo.png" alt="" />
                </div> : ''
            }
            
            <div className='menuBar'>
                {
                    (history.pathname === '/') ? 
                    (<Link style={{color:' #D7F561', fontWeight: '700'}} className='route home-nav' to = '/'>Home</Link>) : 
                    <Link className='route home-nav' to = '/'>Home</Link>
                }
                {
                    (history.pathname === '/services') ? 
                    (<Link style={{color:' #D7F561', fontWeight: '700'}} className='route services-nav' to = '/services'>Services</Link>) : 
                    <Link className='route services-nav' to = '/services'>Services</Link>
                }
                
                <Link className='route login-nav' to = '/login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;