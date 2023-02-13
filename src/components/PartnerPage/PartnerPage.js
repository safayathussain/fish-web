import React from 'react';
import './PartnerPage.css';
import { FiArrowRight } from 'react-icons/fi';
import image from '../../resources/images/partner-page-image.png'

const PartnerPage = () => {
    return (
        <div className='bg-white py-10'>
            <div className='main-container  flex flex-col md:flex-row-reverse gap-4 items-center pt-12'>
                <div className='details md:w-1/2 '>
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl oswald text-black mb-5'>Partner with us to digitize the Blue Food ecosystem</h1>
                    <p className='mt-3 poppins text-lg lg:text-xl text-black'>We leverage technology to scale the Bangladesh Ocean Fisheries and Marine Aquaculture Industries and make them more rewarding for all of its stakeholders, including Fishermen, Harvesters, Factories, and Consumers.</p>
                    <button className='join-btn text-white px-5 py-2 flex items-center gap-2 transition-all ease-in duration-200 poppins text-xl mt-5'>Join Us<p><FiArrowRight /></p></button>
                </div>
                <div className='p-5 md:w-1/2 flex justify-start overflow-x-hidden' data-aos="fade-right">
                    <img className='commerce-image lg:pl-5 w-full ' src={image} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default PartnerPage;