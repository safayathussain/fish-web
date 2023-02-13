import React from 'react';
import './Footer.css'
import logo from '../../resources/images/Logo.png'
import facebookLogo from '../../resources/images/facebook-icon.svg'
import linkedInLogo from '../../resources/images/linkedin-icon.svg'
import twitterLogo from '../../resources/images/twitter-icon.svg'

const Footer = () => {
    return (
        <div className='footer-bg pt-5'>
            {/* footer for large device */}
            <div className='big-device-footer'>
                <div className='main-container flex flex-col items-center'>
                    <h3 className='text-black pt-12 text-center poppins footer-header'>Have a Genarel Inquiry?</h3>
                    <p className='text-center text-black poppins w-full md:w-3/5 lg:w-2/5 pt-3'>If you have a general inquiry and would like to speak to our expert team, you can contact us</p>
                    <button className='footer-contact-btn px-3 py-1 text-white poppins mt-6 mb-6 transition-all ease-in duration-300'>Contact Us</button>
                    <hr className='footer-hr'></hr>
                    <div className='flex justify-between w-full items-center pb-20'>
                        <img className='footer-logo' src={logo} alt=''/>
                        <p className='text-black poppins text-lg'>© 2023 Seaqua. All Rights Reserved.</p>
                        <div className='flex gap-5'>
                            <img src={facebookLogo} alt=''/>
                            <img src={linkedInLogo} alt=''/>
                            <img src={twitterLogo} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer for small device */}
            <div className='small-device-footer'>
                <div className='main-container flex flex-col items-center'>
                    <h3 className='text-black pt-12 text-center poppins footer-header'>Have a Genarel Inquiry?</h3>
                    <p className='text-center text-black poppins w-full md:w-3/5 lg:w-2/5 pt-3'>If you have a general inquiry and would like to speak to our expert team, you can contact us</p>
                    <button className='footer-contact-btn px-3 py-1 text-white poppins mt-6 mb-6 transition-all ease-in duration-300'>Contact Us</button>
                    <hr className='footer-hr'></hr>
                    <div className='flex justify-between w-full items-center pb-20 footer-lowest'>
                        <img className='footer-logo' src={logo} alt=''/>
                        <div className='flex gap-5'>
                            <img className='cursor-pointer' src={facebookLogo} alt=''/>
                            <img className='cursor-pointer' src={linkedInLogo} alt=''/>
                            <img className='cursor-pointer' src={twitterLogo} alt=''/>
                        </div>
                        <p className='text-black poppins text-lg text-center'>© 2023 Seaqua. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;