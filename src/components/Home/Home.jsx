import React, { useEffect, useState } from 'react';
import img from '../../../public/image/hardy.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom'
import CatagoryJob from '../CatagoryJob/CatagoryJob';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const Home = () => {
    const jobs = useLoaderData();
    // console.log(jobs)

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/featuredJobs.json');
            const data = await res.json();
            setDatas(data);
            console.log(data)

        }
        fetchData();


    }, [])



    return (
        <div className='container mx-auto mt-8 mb-8 p-5' >
            <div className='grid grid-cols-1 md:grid-cols-2  '>
                <div className=''>
                    <h1 className='banner-title font-bold text-3xl'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h1>
                    <p className='banner-p'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='applyNow-btn '>Get Started</button>
                </div>
                <div>
                    <img className='banner-img' src={img} alt="" />
                </div>
            </div>

            <div>
                <h3 className='text-2xl font-semibold text-center mt-12'>Job Category List</h3>
                <p className='font-medium text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='job-container container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <CatagoryJob
                        key={job.id}
                        job={job}

                    ></CatagoryJob>)
                }

            </div>

            {/*  featured jobs section */}
            <div className='container mx-auto mt-8 mb-4 '>
                <h2 className='text-2xl text-center font-bold'>Featured Jobs</h2>
                <p className='text-center font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='job-container container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        datas.map(data => <FeaturedJob
                            key={data.id}
                            data={data}
                        ></FeaturedJob>)
                    }
                </div>
            </div>

          



        </div>
    );
};

export default Home;