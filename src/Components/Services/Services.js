/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import services from '../../data/data';
import Nav from '../Nav/Nav';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [mouseHovered, setMouseHovered] = useState(false)
    const mouseH = ()=> {
        setMouseHovered(!mouseHovered)
    }
    let animeStyle = ''
    if(mouseHovered){
        animeStyle = {
            transform: 'translate(1400px)'
        }
    }else{
        animeStyle = {
            
        }
    }
    return (
        <div className='service-page'>
            <Nav />
            <div id='anime' style={animeStyle}>
                <div className='line'>
                    <img src="./images/Line.png" alt="" /><img src="./images/Line.png" alt="" /><img src="./images/Line.png" alt="" />
                </div>
                <div className='plane-body'>
                    <img src="./images/Vector.png" alt="" />
                </div>
            </div>
            
            <h3 id='services'>SERVICES</h3>
            <h1 id='provide'>We provide services to our clients</h1>
            <div className='services'>
                {
                    services.map(service => <Service mouseH = {mouseH} key={service.id} service = {service}/>)
                }
            </div>
        </div>
    );
};

export default Services;