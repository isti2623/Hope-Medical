import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Foot = () => {
    return (

        <div>


            <Container>
                <div className="row my-5">
                    <h1 className='fs-1 fw-bold  my-5 text-danger'>Keep <span className='text-dark'>In Touch</span> </h1>

                    <div className="col-lg-6 bg-danger p-5">
                        <h5 className="text-white">Hope Medical</h5>
                        <h5 className="text-white">H # B-91, R # E-2, Eastern Housing Ltd. Pallabi, Mirpur, Dhaka-1216</h5>
                        <h5 className="text-white">Phone : +880-2-9008711, +8801553451307, +8801787658138, +8801913399965
                        </h5>
                        <h5 className="text-white">Office (01726-008028)
                        </h5>
                        <h5 className="text-white">E-mail: hope@gmail.com
                        </h5>
                    </div>





                    <div className="col-lg-6  bg-danger p-5">
                        <h5 className="text-white">Message from President
                        </h5>
                        <p className="text-white">Massage has been used as a medical treatment dating back to the Chinese over 5000 years ago.More recently Professor Silas Weir Mitchell (1829-1914), a neurologist in Philadelphia is thought to be the first to bring massage to the attention of the US medical community.In 1884, Douglas Graham, MD of Boston Massachusetts wrote A Practical Treatise on Massage which focuses on the treatment of specific diseases and disorders by using massage as a treatment.In 1885, Dr Harvey Kellogg published the classic textbook The Art of Massage, Its Physiological Effects and Therapeutic Actions.</p>
                    </div>
                </div>

            </Container>

        </div>
    );
};
export default Foot;