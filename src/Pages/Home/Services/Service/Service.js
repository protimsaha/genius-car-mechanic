import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()

    const { id, name, img, price, description } = service

    const handleServiceDetail = id => {
        navigate(`service/${id}`)
        console.log(id)
    }

    return (
        <div className='service my-5'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;