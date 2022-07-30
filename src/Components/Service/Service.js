import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, details, photo} = props.service;
    return (
        <div className='service-card'>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>{details}</p>
        </div>
    );
};

export default Service;