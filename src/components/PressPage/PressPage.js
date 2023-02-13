import React from 'react';
import './PressPage.css'
import { FiArrowRight } from 'react-icons/fi';

const PressPage = () => {
    return (
        <div className='bg-white pt-20 pb-20'>
            <div className='main-container'>
                <h1 className='text-4xl lg:text-5xl xl:text-6xl text-center oswald text-black '>Press Release</h1>
                <div className='flex flex-wrap pt-14 gap-12 items-center justify-center'>
                    <div className='press-1 flex flex-col justify-end' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="500"data-aos-offset="-400">
                        <h3 className='text-4xl lg:text-5xl text-white p-6 oswald press-text'>Seaqua driving the Bangladesh Blue Revolution</h3>
                        <div>
                            <button className='read-more-btn px-5 py-2 m-6 mt-0 poppins text-white transition-all ease-in duration-300 flex items-center gap-2 text-xl'>Read More<h3><FiArrowRight /></h3></button>
                        </div>
                    </div>
                    <div className='press-2 flex flex-col justify-end'data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="500"data-aos-offset="-400">
                        <h3 className='text-4xl lg:text-5xl text-white p-6 oswald press-text'>Bangladesh can lead the global 138B Seafood Industry</h3>
                        <div>
                            <button className='read-more-btn px-5 py-2 m-6 mt-0 poppins text-white transition-all ease-in duration-300 flex items-center gap-2 text-xl'>Read More<h3><FiArrowRight /></h3></button>
                        </div>
                    </div>
                    <div className='press-3 flex flex-col justify-end'data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="500"data-aos-offset="-400">
                        <h3 className='text-4xl lg:text-5xl text-white p-6 oswald press-text'>Shrimp Export from Bangladesh jump to 1B USD</h3>
                        <div>
                            <button className='read-more-btn px-5 py-2 m-6 mt-0 poppins text-white transition-all ease-in duration-300 flex items-center gap-2 text-xl'>Read More<h3><FiArrowRight /></h3></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressPage;