import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='position-relative'>
            <p className='my-5 text-center'>© copyright claimed {year}</p>
        </footer>
    );
};

export default Footer;