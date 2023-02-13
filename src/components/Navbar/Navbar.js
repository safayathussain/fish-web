import React from 'react';
import logo from '../../resources/images/Logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className="navbar navbar-container">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="p-3 cursor-pointer transition-all ease-in duration-300 humburger flex justify-center bg-transparent border-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-lg w-52">
                        <li><a className="text-slate-900 poppins hover-text" href="/">Home</a></li>
                        <li><a className="text-slate-900 poppins hover-text" href="/">About</a></li>
                        <li tabIndex={0}>
                        <a href='/' className="justify-between text-slate-900 hover-text poppins">
                            Company
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-white ml-3">
                            <li><a className="text-slate-900 poppins hover-text" href="/">example 1</a></li>
                            <li><a className="text-slate-900 poppins hover-text" href="/">example 2</a></li>
                        </ul>
                        </li>
                        
                        <li tabIndex={0}>
                        <a href='/' className="justify-between text-slate-900 hover-text poppins">
                            Resources
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-white ml-3">
                            <li><a className="text-slate-900 poppins hover-text" href="/">example 1</a></li>
                            <li><a className="text-slate-900 poppins hover-text" href="/">example 2</a></li>
                        </ul>
                        </li>
                        
                    </ul>
                    </div>
                    
                    <img className='sm:w-44 w-28' src={logo} alt='' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a className="text-slate-900 poppins hover-text" href="/">Home</a></li>
                    <li><a className="text-slate-900 poppins hover-text" href="/">About</a></li>
                    <li tabIndex={0}>
                        <a className="text-slate-900 poppins hover-text" href="/">
                        Company
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-white mt-3">
                        <li><a className="text-slate-900 poppins hover-text" href="/">example 1</a></li>
                        <li><a className="text-slate-900 poppins hover-text" href="/">example 2</a></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a className="text-slate-900 poppins hover-text" href="/">
                        Resources
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-white mt-3">
                        <li><a className="text-slate-900 poppins hover-text" href="/">example 1</a></li>
                        <li><a className="text-slate-900 poppins hover-text" href="/">example 2</a></li>
                        </ul>
                    </li>
                    
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="text-white nav-btn border-0 poppins rounded-none normal-case px-2 py-1 sm:px-4 sm:py-2 transition-all ease-in" href='/'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;