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
                    <Row xs={1} md={2} className="g-4">
                        {
                            doctor.map(docs => <Col>
                                <Card >
                                    <Card.Img height='350px' variant="top" src={docs.image} />
                                    <Card.Body>
                                        <Card.Title>{docs.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>
            </div>



        </div>
    );
};

export default Doctor;