import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img className='w-25 rounded' src='https://dypdvfcjkqkg2.cloudfront.net/large/1553152-5.png' alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to='addservice'>Add Service</Nav.Link>
                                <Nav.Link as={Link} to='manageservice'>Manage Service</Nav.Link>
                            </>
                        }
                        {user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign out</button> :
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;