import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='content'>
                <div className='plane'>
                    <div className='line'>
                        <img src="./images/Line.png" alt="" /><img src="./images/Line.png" alt="" /><img src="./images/Line.png" alt="" />
                    </div>
                    <div className='plane-body'>
                        <img src="./images/Vector.png" alt="" />
                    </div>
                </div>
                <div className='banner-content'>
                    <h1>Welcome to</h1>
                    <h1><span id='highlight-font'>Globetech</span></h1>
                    <p>We are committed to deliver <span id='font-highlighter'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                    <button id='highlight-background'>Support us</button>
                    <button style={{border: '2px solid #8FE5FF',
borderRadius: '4px', color: '#8FE5FF', backgroundColor: 'transparent'}}>Our Mission</button>
                </div>
                
            </div>
            <div className='solar'>
                <div id="fourth-circle">
                    <div className='big-round-fourth round'></div>
                    <div className='mid-round-fourth round'></div>
                    <div id="third-circle">
                        <div id='first' className='round'></div>
                        <div id='second' className='round'></div>
                        <div id="second-circle">
                            <div className='big-round-second round'></div>
                            <div className='small-round-second round'></div>
                            <dive id="center-circle">
                              
                            </dive>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;