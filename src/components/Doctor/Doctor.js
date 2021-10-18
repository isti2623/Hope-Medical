import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const Doctor = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-danger fs-1 fw-bold mt-3'>Our Specialist</h2>
            <div className='container'>

                <div className='my-5'>

                    <div className='row'>

                        {
                            doctor.map(docs => <div className="col-lg-6">
                                <img height='450px' className='w-100' src={docs.image} alt="" />
                                <h2 className='text-center text-danger my-3 fw-bold'>{docs.title}</h2>
                            </div>)
                        }

                    </div>

                </div>
            </div>



        </div>
    );
};

export default Doctor;