import React from 'react';
import './Service.css'
const Service = (props) => {
    const { title, image, desc } = props.doc;
    return (
        <>
            <div className="col-lg-4  doc-card">
                <img height='250px' className='w-100 mt-5' src={image} alt="" srcset="" />
                <div className=''>
                    <h5>{title}</h5>
                    <p>{desc.slice(0, 150)}</p>
                    <button className='btn btn-danger'>Read More...</button>
                </div>
            </div>
        </>
    );
};

export default Service;