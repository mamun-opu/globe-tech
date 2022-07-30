import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, details, photo} = props.service;

    return (
        <div className='service-card' onMouseEnter={props.mouseH} onMouseLeave = {props.mouseH}>
            <img src={photo} alt="" />
            <h4>{name}</h4>
            <p>{details}</p>
            <button>MORE</button>
        </div>
    );
};

export default Service;