import React from 'react';
import CommercePageImg from '../../resources/images/commerce-banner.png'
import './CommercePage.css'
import { FiArrowRight } from 'react-icons/fi';
import greenLine from '../../resources/images/green-line-mini.png'
import blueLine from '../../resources/images/blue-line-mini.png'

const CommercePage = () => {
    return (
        <div className='main-background py-24'>
            <div className='main-container flex overflow-x-hidden flex-col-reverse md:flex-row gap-2 items-center md:items-start xl:items-center pt-5'>
                <div className='details md:w-1/2'>
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl oswald text-black mb-5'>Intergrated Blue Food commerce for everyone</h1>
                    <div className='bg-white w-full rounded-lg commerce-shadow px-5 mb-4'>
                        <h3 className='flex items-center gap-2 py-3 text-xl sm:text-3xl blue-text-fisheries oswald'><img src={blueLine} alt=''/>Be it Ocean Fisheries</h3>
                    </div>
                    <div className='bg-white w-full rounded-lg commerce-shadow px-5'>
                        <h3 className='flex items-center gap-2 py-3 text-xl sm:text-3xl green-text-aquaculture oswald'><img src={greenLine} alt=''/>Be it Marine Aquaculture</h3>
                    </div>
                    <p className='mt-3 poppins text-lg lg:text-xl text-black'>We bring commerce for all stakeholder in the value chain, Making it more rewarding for everyone that can feel good about it.</p>
                    <button className='join-btn text-white px-5 py-2 flex items-center gap-2 transition-all ease-in duration-200 poppins text-xl mt-5'>Join Us<p><FiArrowRight /></p></button>
                </div>
                <div className='p-5 md:w-1/2 flex justify-center'>
                    <img className='commerce-image lg:pl-5 w-full overflow-hidden' data-aos="fade-left"   src={CommercePageImg} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default CommercePage;