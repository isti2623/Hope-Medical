import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='footer-part mt-5'>
                <div className="row">
                    <div className="col-lg-6 col-md-12 ms-5 mt-5">
                        <img className='w-25 ms-5 mt-3 foot-image' src={logo} alt="" />
                        <p className='container text-white mb-5 ms-5 mt-5'>copyright 2022 Hope Medical</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ul className='text-decoration-none text-white my-5'>
                            <br />
                            <br />
                            <br />
                            <li>About Hope Medical</li>
                            <li>Read Our Blog</li>
                            <li>Signup to Hope</li>
                            <li>Add your Hospital</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;