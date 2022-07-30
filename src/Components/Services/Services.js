import React from 'react';
import services from '../../data/data';
import Nav from '../Nav/Nav';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    console.log(services)
    return (
        <div className='service-page'>
            <Nav />
            <div id='anime' className='plane'>
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
                    services.map(service => <Service key={service.id} service = {service}/>)
                }
            </div>
        </div>
    );
};

export default Services;