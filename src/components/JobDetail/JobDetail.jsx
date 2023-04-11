import React from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom'

const JobDetail = ({job}) => {
    const jobDetails = useLoaderData();
    
    const  [educational_requirements,experiences, id,] = jobDetails;
    // const  {educational_requirements,experiences, id,} = job;
    // const nevigate = useNavigate();
    // console.log(jobDetail);

    return (
        <div>

            {/* {
                jobDetails.map(job=><jobDetails
                key={job.id}
                ></jobDetails>)
            } */}
            <h1>Educational Requirement:{id}</h1>
            <h4>{educational_requirements}</h4>
        </div>
    );
};

export default JobDetail;