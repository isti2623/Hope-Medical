import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { title, image, desc, id } = props.doc;
    const url = `/servicedetails/${id}`
    return (
        <>
            <div className="col-lg-4  doc-card mb-3">
                <img height='250px' className='w-100 mt-5' src={image} alt="" />
                <div className=''>
                    <h5>{title}</h5>
                    <p>{desc.slice(0, 150)}</p>
                    <Link to={url}> <button className='btn btn-danger'>Read More...</button></Link>
                </div>
            </div>
        </>
    );
};

export default Service;