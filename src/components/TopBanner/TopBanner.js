import React from 'react';
import './TopBanner.css'
import { FiArrowRight } from 'react-icons/fi';
import video from '../../resources/videos/top-banner-video.mp4';
import greenLine from '../../resources/images/green-curve-line.png'

const TopBanner = () => {
    return (
        <div>
            <div className='banner-container'>
                <video autoPlay loop muted playsInline src={video} className="video">
                </video>
                <div className='content-top-banner'>
                    <div data-aos="zoom-in">
                        <h1 className='oswald sailing-text'>SAILING THE</h1>
                        <h1 className='blue-text oswald pr-3'>BLUE<span> REVOLUTION</span></h1>
                        <img src={greenLine} alt='' className='mt-7 mb-7 green-line'/>
                        <p className='text-lg sm:text-xl poppins w-3/4'>Making sense of Ocean Fisheries and Marine Aquaculture for the world that everyone can feel good about it</p>
                        <button className='px-5 py-2 join-btn-top poppins text-xl mt-4 flex items-center gap-2 transition-all ease-in duration-200'>Join Us <p><FiArrowRight /></p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;