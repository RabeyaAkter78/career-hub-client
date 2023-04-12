import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDollar, faEnvelope, faLocation, faPhone, faTicketSimple, faUserDoctor, faVoicemail, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetail = () => {
    const jobDetails = useLoaderData();
    const idd = useParams()
    // console.log(idd);
    console.log(jobDetails)

    let getData;
    if (!jobDetails) {
        return;
    }
    else {
        getData = jobDetails?.filter(jobs => {

            if (jobs.id == parseInt(idd.id)) {

                return jobs;
            }
        })
    }

    console.log(getData[0])
    const { educational_requirements, job_responsibility, id, job_description, salary, job_title, contact_information, location, experiences, company_logo, remote_or_onsite, fulltime_or_parttime, company_name

    } = getData[0]

    const dataObj = {
        id: id,
        company_logo: company_logo,
        job_title: job_title,
        location: location,
        salary: salary,
        remote_or_onsite: remote_or_onsite,
        fulltime_or_parttime: fulltime_or_parttime,
        company_name: company_name,
    }

    const getLocalData = () => {
        let stortData = {};
        const getData = localStorage.getItem("dataId");
        if (getData) {
            stortData = JSON.parse(getData)
        }
        return stortData;
    }
    const AppliedData = (jobName, dataObj) => {
        toast("SuccessFully Added!");
        const cart = getLocalData();
        cart[jobName] = dataObj;
        const setData = JSON.stringify(cart);
        localStorage.setItem("dataId", setData)
    }

    return (
        <div className=' job-container container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-12 '>
            <div className='address-info text-xl font-bold job-container '>
                <p> <span className='text-2xl font-bold'>Job Description: </span>{job_description}</p>
                <p> <span className='text-2xl font-bold'>Job Responsiblities: </span>{job_responsibility}</p>
                <p> <span className='text-2xl font-bold'> Educational Requirements: </span>{educational_requirements}</p>
                <p> <span className='text-2xl font-bold'> Experiences: </span>{experiences}</p>
            </div>
            <div className='address-info text-xl font-semibold job-container'>

                <h1 className=' text-xl font-bold text-black'>Job Details of id No: {id}</h1>

                <p>salary:<FontAwesomeIcon icon={faDollar} />{salary}</p>
                <p>Job Title:<FontAwesomeIcon icon={faUserDoctor} />{job_title}</p>

                <h3 className='text-xl font-bold text-black'>Contact Information:</h3>
                <p><FontAwesomeIcon icon={faPhone} /> {contact_information.phone}</p>
                <p> <FontAwesomeIcon icon={faEnvelope} />{contact_information.email}</p>
                <p><FontAwesomeIcon icon={faLocation} /> Address: {location}</p>
                <button onClick={() => AppliedData(job_title, dataObj)} className='applyNow-btn container'> apply Now</button>
            </div>

        </div>
    );
};

export default JobDetail;