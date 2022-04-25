import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)

    return (
        <div>
            <h2>Do you want to book the service: {service.name}</h2>

            <br />
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'> Proced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;