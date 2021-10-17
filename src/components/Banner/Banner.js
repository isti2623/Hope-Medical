import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className="container ">
                <div className='text-field'>
                    <div className=''>
                        <div>
                            <h6 className='text-white'>FEEL THE DIFFERENCE WITH US</h6>
                            <h2 className='text-part'>Your Feels Is Our <br /> <span className='text-danger'>Priority</span> </h2>
                            <div className="btn btn-danger fw-bold">OUR DOCTORS <FontAwesomeIcon className='text-white mt-2' icon={faArrowRight} /></div>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default Banner;