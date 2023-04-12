import React from 'react';
import { useNavigate } from 'react-router-dom';
const ApplyData = ({ data }) => {
    const { company_logo, company_name, remote_or_onsite, location, salary, job_title, id, fulltime_or_parttime } = data;

    const navigate = useNavigate()
    const getIdFunc = (id) => {
        console.log(id)
        navigate(`/featuredJob/newData/${id}`);
    };
    return (
        <div className='container mx-auto mt-12 flex justify-between items-center'>
            <div>
                <img className='company-logo' src={company_logo} alt="" />
            </div>
            <div>
                <h1>{job_title}</h1>
                <h1>{company_name}</h1>
                <div className='flex justify-center items-center'>
                    <h1>{remote_or_onsite}</h1>
                    <h1>{fulltime_or_parttime}</h1>
                </div>
                <h1>{location}</h1>
                <h1>{salary}</h1>
            </div>
            <button onClick={() => getIdFunc(id)} className='applyNow-btn'>View Details</button>

        </div>
    );
};

export default ApplyData;