import React from 'react';
import './CatagoryJob.css'

const CatagoryJob = ({ job }) => {
    const { logo, job_category, available_job_number } = job
    return (
        <div className='job-container'>
            <div>
                <img className='job-logo ml-8' src={logo} alt="" />
                <h2 className='text-xl font-bold'>{job_category}</h2>
                <p className='text-sm font-sem
                '>{available_job_number} + jobs available</p>
            </div>
        </div>
    );
};

export default CatagoryJob;