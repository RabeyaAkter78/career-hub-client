import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBoard, faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import img from '../../../public/image/logo-1_files/whatsapp.png'
import image from '../../../public/image/logo-1_files/logo-5.png'
import images from '../../../public/image/logo-1_files/logo-3.webp'


const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-5 container mx-auto mt-12 mb-14 bg-slate-950 text-white p-20'>
                <div>
                    <h3 className='font-bold mb-4'>Job Hunter</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='logo flex justify-around items-center gap-6 ml-10 mt-8'>
                        <img src={img} alt="" />
                        <img src={image} alt="" />
                        <img src={images} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='font-bold mb-4'>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3 className='font-bold mb-4'>Product</h3>
                    <p>Prototype
                        Plans & Pricing
                        Customers
                        Integrations</p>
                </div>
                <div>
                    <h3 className='font-bold mb-4'>Support</h3>
                    <p>Help Desk
                        Sales
                        Become a Partner
                        Developers</p>
                </div>
                <div>
                    <h3 className='font-bold mb-4'>Contact</h3>
                    <p>524 Broadway , NYC
                        +1 777 - 978 - 5570</p>
                </div>


            </div>
            {/* <div className='flex justify-between items-center text-white'>
                <p>@2023 JobHunter. All Rights Reserved</p>
                <p>Powered by JobHunter</p>
            </div> */}
        </div>
    );
};

export default Footer;