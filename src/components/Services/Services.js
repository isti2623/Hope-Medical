import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        fetch('/medi.json')
            .then(res => res.json())
            .then(data => setDocs(data))
    }, [])
    return (
        <div className='container'>
            <div className='my-5'>
                <h6>SERVICE HOPE MEDICAL
                </h6>
                <h1 className='fs-1'><span className='text-danger fw-bold'>Best Service</span> For Your Health</h1>
                <div className="row container">
                    {
                        docs.map(doc => <Service
                            key={doc.id}
                            doc={doc}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;