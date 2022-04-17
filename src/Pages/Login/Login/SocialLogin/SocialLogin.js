import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Sociallogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    console.log(error1)

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-4 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='text-center my-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50'>
                    <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <span className='px-3'>Google Sign in</span></button>
            </div>
            <div className='text-center my-4'>
                <button className='btn btn-primary w-50'>
                    <img className='google' src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" />
                    <span className='px-3'>Facebook Sign in</span></button>
            </div>
            <div className='text-center my-4'>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50'>
                    <img className='google' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    <span className='px-3'>Github Sign in</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;