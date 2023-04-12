import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom'

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
    const stortedApplyData = (jobName, dataObj) => {
        // toast("SuccessFully Applayed")
        const cart = getLocalData();
        cart[jobName] = dataObj;
        const setData = JSON.stringify(cart);
        localStorage.setItem("dataId", setData)
    }

    return (
        <div className='container mx-auto flex justify-center items-center mt-12'>
            <div>
                <p> <span className='text-xl font-bold'>Job Description:</span>{job_description}</p>
                <p> <span className='text-xl font-bold'>Job Responsiblities:</span>{job_responsibility}</p>
                <p> <span className='text-xl font-bold'> Educational Requirements:</span>{educational_requirements}</p>
                <p> <span className='text-xl font-bold'> Experiences:</span>{experiences}</p>
            </div>
            <div>
                <h1>Educational Requirement:{id}</h1>
                <p>{contact_information.phone}</p>
                <p>{contact_information.email}</p>
                <button onClick={() => stortedApplyData(job_title, dataObj)} className='applyNow-btn'> apply Now</button>
            </div>

        </div>
    );
};

export default JobDetail;