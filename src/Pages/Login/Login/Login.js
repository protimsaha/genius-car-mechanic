import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

    const navigate = useNavigate()

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";



    const handleSubmit = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://gentle-mountain-33302.herokuapp.com/login', { email })

        localStorage.setItem('accessToken', data?.accessToken)
        navigate(from, { replace: true });

    }

    if (user) {
    }

    const handleToRegister = () => {
        navigate('/signup')
    }
    const handleToResetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        alert('Email sent')
    }

    return (
        <div className='w-50 container mx-auto border rounded my-5 p-5'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-center'>Please Login!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-3'>Don't have an account? <span onClick={handleToRegister} className='text-success pointer' role='button'>Please Sign Up</span> </p>
                <p className='mt-3'>Forgate Password? <span onClick={handleToResetPassword} className='text-success pointer' role='button'>Reset Password</span> </p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;