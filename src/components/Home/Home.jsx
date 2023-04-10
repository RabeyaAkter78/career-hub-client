import React from 'react';
import img from '../../../public/image/hardy.png';
import './Home.css'

const Home = () => {
    return (
        <div className='grid grid-cols-2  container mx-auto mt-8 mb-8'>
            <div className=''>
                <h1 className='banner-title font-bold text-3xl'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h1>
                <p className='banner-p'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='applyNow-btn '>Get Started</button>
            </div>
            <div>
                <img className='banner-img' src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;