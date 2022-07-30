import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id='login-page'>
            <div className='welcome-message'>
                <div className='name'>
                    <h1>GLOBETECH</h1>
                    <h1>COMPANY LIMITED</h1>
                </div>
                <p>Make yourself digitalized & more efficient</p>
                <Link className='route' to = '/'><img id='triangle' src="./images/Vector 1.png" alt="" /></Link>
                
            </div>
            <div className='login-area'>
                <div className='login-form'>
                    <h2>Welcome</h2>
                    <p>Sign in to your account</p>
                    <div className="input">
                        <input type="email" name="" id="" placeholder='Email'/>
                        <input type="password" name="" id="" placeholder='Password'/>
                        
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;