import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user, loading] = useAuthState(auth)

    const handleSubmit = event => {
        event.preventDefault()
        const order = {
            name: user?.displayName,
            email: user?.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };
        axios.post('https://gentle-mountain-33302.herokuapp.com/order', order)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    alert('Order Booked');
                    event.target.reset()
                }
            })
    }


    return (
        <div className='w-50 mx-auto'>
            {loading ? 'Loading...' : ''}

            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-100 mb-3' type="text" name='name' value={user?.displayName} required placeholder='Name' />
                <br />
                <input className='w-100 mb-3' type="email" name='email' value={user?.email} required placeholder='email' />
                <br />
                <input className='w-100 mb-3' type="text" value={service.name} name='service' required placeholder='service' />
                <br />
                <input className='w-100 mb-3' type="text" name='address' required placeholder='address' />
                <br />
                <input className='w-100 mb-3' type="text" name='phone' required placeholder='phone' />
                <br />
                <input className='btn btn-success' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default Checkout;