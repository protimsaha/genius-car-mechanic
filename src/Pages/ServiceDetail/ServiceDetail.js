import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome to detail  {serviceId}</h2>

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