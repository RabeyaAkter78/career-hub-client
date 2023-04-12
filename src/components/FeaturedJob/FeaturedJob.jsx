import React, { useState } from 'react';
import './FeaturedJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'
import JobDetail from '../JobDetail/JobDetail';
import { useNavigate } from 'react-router-dom'

const FeaturedJob = ({ data }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, id } = data;

    // const jobs = useLoaderData();
    const navigate = useNavigate()
    const getIdFunc = (id) => {
        navigate(`/featuredJob/${id}`);
    }

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
                <div className='flex items-center gap-4 font-semibold '>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p>Salary: <FontAwesomeIcon icon={faDollar} />{salary}</p>
                </div>

                <button onClick={() => getIdFunc(id)} className='applyNow-btn'>
                    {/* <Link to={`/featuredJob/${id}`}>View Details</Link> */}
                    View Details
                </button>
            </div>
        </div>
    );
};

export default FeaturedJob;