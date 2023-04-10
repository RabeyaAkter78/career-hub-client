import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav className='flex justify-between items-center mt-8 container mx-auto'>
            <h1 className='text-purple-800 text-2xl font-bold'>Job Hunter</h1>
            <div className='font-bold' >
                <Link to='/'>Home</Link>
                <Link to='/appliedJobs'>AppliedJobs</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blogs</Link>
            </div>
            <button className='applyNow-btn hover:bg-violet-900 font-medium'>Apply Now</button>
        </nav>
    );
};

export default Header;