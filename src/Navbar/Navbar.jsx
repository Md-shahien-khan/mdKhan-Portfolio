import React from 'react';
import logo from '../assets/images/logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/">
                    <img src={logo} className='mx-2' width={50} height={33} alt='Logo'/>
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/md-shahien-khan-a46275229/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin></FaLinkedin>
                </a>
                <a href="https://github.com/Md-shahien-khan"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub></FaGithub>
                </a>
                <a href="https://www.instagram.com/khan.shawon02/profilecard/?igsh=M3FwMTFpcTMxYWUz"
                target="_blank"
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram></FaInstagram>
                </a>
                <a href="https://www.facebook.com/share/15Nia1sBvN/?mibextid=wwXIfr"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'>
                    <FaFacebook></FaFacebook>
                </a>
            </div>
        </div>
    );
};

export default Navbar;