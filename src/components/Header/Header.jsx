import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { Footer, Navbar } from 'flowbite-react';

const Header = () => {
    const [open, setOpen] = useState(false);


    return (

        <div className='banner  container mx-auto z-50  bg-slate-400 p-5'>

            <Navbar className='p-5 '
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-indigo-500 "> Job Hunter</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className=''>
                    <Navbar.Link>
                        <Link to="/"> Home</Link>
                    </Navbar.Link>

                    <Navbar.Link>
                        <Link to='/appliedJobs'>AppliedJobs</Link>
                    </Navbar.Link>

                    <Navbar.Link >
                        <Link to='/statistics'>Statistics</Link>
                    </Navbar.Link>
                    <Navbar.Link >
                        <Link to='/blog'>Blogs</Link>
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
          

        </div>
    );
};

export default Header;

{/* <div className='grid grid-cols-5 md:grid-cols-2 container mxx-auto mt-12 mb-14 bg-slate-950 text-white'>
<div>
    <h3>Job Hunter</h3>

</div>
<div></div>
<div></div>
<div></div>
<div></div>


</div> */}