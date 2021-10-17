import React from 'react';
import doctor from '../../images/doctor.png'
const ChooseMedical = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-4 text-center card bg-danger text-white p-2 m-2">
                        <h5>DIAGNOSE</h5>
                        <p>Examination & Diagnosis</p>

                    </div>
                    <div className="col-lg-3 text-center card bg-dark text-white p-2 m-2">
                        <h5>CARE HEALTHY</h5>
                        <p>Care and recuperation

                        </p>

                    </div>
                    <div className="col-lg-4 text-center card bg-danger text-white p-2 m-2">
                        <h5>TREATMENT</h5>
                        <p>Treatment of the disease

                        </p>

                    </div>
                </div>
                <div className='my-5'>
                    <h6>WHY CHOOSE HOPE MEDICAL

                    </h6>
                    <h1 className='fs-1'><span className='text-danger fw-bold'>The Best</span> For Your Health</h1>
                </div>
                <div className="row">
                    <div className="col-lg-8 mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>MEDICAL COUNSELING
                                </h6>
                                <p>In compliance of the Order of the Hon'ble Supreme Court of India dated 23/03/2012 passed in I.A No. 16/2012 in Civil Appeal No. 1944 of 1993 - Anand S.Biji Vs State of Kerala & Others & vide order dated 09/5/2017 passed in Writ Petition</p>

                            </div>
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>TOP LEVEL DOCTORS

                                </h6>
                                <p>Find Usa Doctor List. Search Faster, Better & Smarter at ZapMeta Now! Web, Images & Video. Information 24/7. Wiki, News & More. 100+ Million Visitors. Trusted by Millions. The Complete Overview. Types: pdf, doc, ppt, xls, txt.</p>

                            </div>
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>MEDICAL FACILITES

                                </h6>
                                <p>Health facilities are places that provide health care. They include hospitals, clinics, outpatient care centers, and specialized care centers, such as birthing centers and psychiatric care centers.</p>

                            </div>
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>24 HOURS SERVICES
                                </h6>
                                <p>In commerce and industry, 24/7 or 24-7 service (usually pronounced "twenty-four seven") is service that is available at any time and usually, every day</p>

                            </div>
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>PERSONAL SERVICES

                                </h6>
                                <p>a 1987 British comedy film directed by Terry Jones and written by David Leland, about the rise of a madam of a suburban brothel which</p>

                            </div>
                            <div className="col-lg-6">
                                <h6 className='fw-bold'>DEDICATED PATIENT CARE

                                </h6>
                                <p>Implementation of a structured and standardized EHR was associated with 8.5% decrease in time for </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <img src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseMedical;