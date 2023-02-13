import React from 'react';
import './BlueFoodEcosystem.css'
import shrimp from '../../resources/images/shrimp.png'
import greenLine from '../../resources/images/green-straight-line.png'
import { FiArrowRight } from 'react-icons/fi';

const BlueFoodEcoSystem = () => {
    return (
        <div className='bg-white pb-12'>
            <div className='main-container flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start xl:items-center'>
                <div className='pt-12 flex justify-start md:w-2/5' data-aos="fade-right">
                    <img className='shrimp-image w-full ' src={shrimp} alt=''></img>
                </div>
                <div className='details md:w-3/5'>
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl oswald text-black mb-3'>Building better more sustainable Blue Food ecosystem for the world</h1>
                    <img src={greenLine} alt=''></img>
                    <p className='mt-3 poppins text-lg lg:text-xl text-black'>We enables finance to fisheries and marine aquaculture and leverages technology to streamline the global Blue food ecosystem powered by phygital distribution.</p>
                    <br/>
                    <p className='mt-3 poppins text-lg lg:text-xl text-black'>At Seaqua, we bring solutions that are strategic in approach, innovative by design, and collaborative in nature to end overfishing without ending fishing.</p>
                    <br/>
                    <p className='mt-3 poppins text-lg lg:text-xl text-black'>Our work happens where people, technology, science, business and finance collide. With deep knowledge of the Bluefood industry, we build collaborations of stakeholders. And with them, we identify and plug gaps in the system, leverage existing resources and build actionable platforms that incentivize engagement.</p>
                    <button className='join-btn px-5 text-white py-2 mb-5 flex items-center gap-2 transition-all ease-in duration-200 poppins text-xl mt-5'>Join Us<p><FiArrowRight /></p></button>

                </div>
            </div>
        </div>
    );
};

export default BlueFoodEcoSystem;