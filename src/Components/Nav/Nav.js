import React, { useEffect} from 'react';
import './Nav.css';
import {Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const history = useLocation();
    useEffect(() => {
        console.log(history.pathname)
    },[history]);
    
    // if(history.pathname === '/services'){
    //     setShowLogo(false)
    // }else{}
    
    return (
        <div className='navBar'>
            {
                !(history.pathname === "/services") ? 
                <div className='logo'>
                    <img src="./images/globetech logo.png" alt="" />
                </div> : ''
            }
            
            <div className='menuBar'>
                <Link className='route home-nav' to = '/'>Home</Link>
                <Link className='route services-nav' to = '/services'>Services</Link>
                <Link className='route login-nav' to = '/login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;