import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';


const Signup = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const handleToLogin = () => {
        navigate('/login')
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const displayName = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        navigate('/home')

        await updateProfile({ displayName });
        alert('Updated profile');

    }
    console.log(user)
    if (user) {
        console.log(user?.user)
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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-success' : 'text-danger'} htmlFor="terms">Accept genius car terms and conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'} `} htmlFor="terms">Accept genius car terms and conditions</label>
                <br />
                <input disabled={!agree} className='mt-4 btn btn-primary w-50 mx-auto ' type="submit" value="Sign Up" />
                <p className='mt-3'>Already have an account? <span onClick={handleToLogin} className='text-success pointer' role='button'>Please Log in</span> </p>
            </form>
        </div>
    );
};

export default Signup;