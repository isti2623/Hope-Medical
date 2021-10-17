import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serv, setServ] = useState([]);
    useEffect(() => {
        fetch('/medi.json')
            .then(res => res.json())
            .then(data => setServ(data))
    }, [])

    const findServ = serv.find(food => food.id == serviceId)
    return (
        <div className='container'>
            <div className="row container">
                <div className="col-md-6">

                    <img className='w-100 mt-5' src={findServ?.image} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <h1 className='mt-5 fw-bold text-danger'>{findServ?.title}</h1>
                    <hr />
                    <h5 className='mt-2'>{findServ?.desc}</h5>



                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;