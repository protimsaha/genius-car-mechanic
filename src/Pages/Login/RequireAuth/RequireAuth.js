import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation()

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your Email is not verified</h3>
            <h5 className='text-success'>Please verifie your email</h5>
            <button onClick={async () => {
                await sendEmailVerification()
                alert('email sent')
            }}>
                Verify Email Again
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;