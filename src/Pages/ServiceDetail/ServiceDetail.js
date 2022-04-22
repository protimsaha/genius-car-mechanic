import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div>
            <h2>Do you want to book the service: {service.name}</h2>

            <br />
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'> Proced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;