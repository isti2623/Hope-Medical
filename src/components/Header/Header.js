import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMailBulk, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <div className='main-header bg-danger'>
                <div className="container">
                    <div className="row p-4">
                        <div className="col-lg-3 col-md-6">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <FontAwesomeIcon className='text-white fs-3 mt-2' icon={faClock} />
                                </div>
                                <div className="col-lg-8  col-md-12">
                                    <span className='fw-bold'>WORKING HOURS</span>
                                    <h6 className='text-light'>MON-FRI:9.00-5.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="row">
                                <div className="col-lg-4  col-md-12">
                                    <FontAwesomeIcon className='text-white fs-3 mt-2' icon={faMobile} />
                                </div>
                                <div className="col-lg-8  col-md-12">
                                    <span className='fw-bold'>HOTLINE 24/7</span>
                                    <h6 className='text-light'>+8801322308092</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="row">
                                <div className="col-lg-4  col-md-12">
                                    <FontAwesomeIcon className='text-white fs-3 mt-2' icon={faMailBulk} />
                                </div>
                                <div className="col-lg-8  col-md-12">
                                    <span className='fw-bold'>EMAIL US</span>
                                    <h6 className='text-light'>istiaqueahmed2019.bd@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='menu' >
                    <Navbar collapseOnSelect sticky="top" expand="lg" bg="danger" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Stack direction="horizontal" gap={3}>

                                        <NavLink
                                            className='menu-item'
                                            to="/home"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "black"
                                            }}
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            className='menu-item'
                                            to="/doctor"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "black"
                                            }}
                                        >
                                            Doctor
                                        </NavLink>
                                        <NavLink
                                            className='menu-item'
                                            to="/about"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "black"
                                            }}
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            className='menu-item'
                                            to="/contact"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "black"
                                            }}
                                        >
                                            Contact
                                        </NavLink>

                                        <div className='container'>

                                            <img className='details-header' src={user.photoURL} alt="" srcset="" />
                                            <span className='text-white fw-bold '>{user.displayName}</span>


                                            {
                                                user.email ?
                                                    <Button onClick={logout} className='menu-btn ms-2' variant="light"> Logout</Button>
                                                    :
                                                    <Link to='/login'><Button className='menu-btn' variant="light"> Login</Button></Link>
                                            }

                                        </div>




                                    </Stack>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

            </div>

        </>
    );
};

export default Header;