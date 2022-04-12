import React from 'react';
import sleepy from '../NotFound/sleepy.jpg'

const NotFound = () => {
    return (
        <div className='d-flex container justify-content-center'>
            <h2 className='text-warning me-5 text-center'>Mechanic is Sleeping</h2>
            <img className='ms-5 w-50' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;