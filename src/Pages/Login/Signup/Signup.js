import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const handleToLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    }

    return (
        <div className='border p-5 mx-auto w-50 d-flex align-items-center my-5 flex-column'>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input className='my-2' type="text" placeholder='Your Name' />
                <br />
                <input className='my-2' type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input className='my-2' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input className='my-2 btn btn-primary' type="submit" value="Sign Up" />
                <p className='mt-3'>Already have an account? <span onClick={handleToLogin} className='text-success pointer' role='button'>Please Log in</span> </p>
            </form>
        </div>
    );
};

export default Signup;