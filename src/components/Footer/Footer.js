import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='footer-part mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-25 ms-5 mt-3 foot-image' src={logo} alt="" />
                        <p className='container text-white mb-5 ms-5'>copyright 2022 Hope Medical</p>
                    </div>
                    <div className="col-md-3">
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
                    <div className="col-md-3">
                        <ul className='text-decoration-none text-white my-5'>
                            <br />
                            <br />
                            <br />
                            <li>Get helps</li>
                            <li>Read FAQS</li>
                            <li>View All cities</li>
                            <li>Hope near me</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;