import React from 'react';
import './HelpPage.css';
import image from '../../resources/images/helping-image.png';
import { FiArrowRight } from 'react-icons/fi';

const HelpPage = () => {
    return (
        <div className='main-bg py-12'>
            <div className='main-container overflow-x-hidden flex flex-col-reverse md:flex-row gap-0 items-center pb-5 xl:items-center pt-5'>
                <div className='details md:w-1/2 p-5 pl-0'>
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl oswald text-white mb-5'>Partner with us to digitize the Blue Food ecosystem</h1>
                    <p className='mt-3 poppins text-lg lg:text-xl text-white'>We leverage technology to scale the Bangladesh Ocean Fisheries and Marine Aquaculture Industries and make them more rewarding for all of its stakeholders, including Fishermen, Harvesters, Factories, and Consumers.</p>
                    <button className='join-btn-border text-white px-5 py-2 flex items-center gap-2 transition-all ease-in duration-200 poppins text-xl mt-5'>Join Us<p><FiArrowRight /></p></button>
                </div>
                <div className='p-5 md:w-1/2 flex justify-center' data-aos="fade-left">
                    <img className='commerce-image lg:pl-5 w-full ' src={image} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;