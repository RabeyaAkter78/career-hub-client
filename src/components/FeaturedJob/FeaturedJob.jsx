import React from 'react';
import './FeaturedJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDollar, faDollarSign, faLocation, faLocationArrow, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const FeaturedJob = ({ data }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = data
    console.log(data)
    // const {}=data
    return (
        <div>
            <div className='featured-container font-normal'>
                <img className='company-logo' src={company_logo} alt="" />
                <div>
                    <h3 className='text-xl font-bold'>{job_title}</h3>
                    <p className='font-semibold'>{company_name}</p>
                    <div className=' flex items-center gap-4 text-indigo-500'>
                        <p className='job-type'>{remote_or_onsite}</p>
                        <p className='job-type'>{fulltime_or_parttime}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 font-semibold'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p>Salary: <FontAwesomeIcon icon={faDollar} />{salary}</p>
                </div>
                <button className='applyNow-btn'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;