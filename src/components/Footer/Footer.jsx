import React from 'react';
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='grid max-w-full gap-8 px-4 py-16 mx-auto mb-0 text-gray-100 bg-gradient-to-r from-color1 to-color2 lg:grid-cols-3'>
      <div className='flex flex-col items-start'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Eventy.</h1>
        <p className='py-4 text-left'>
          Eventy is a comprehensive event management platform that helps you plan and organize memorable events. 
        </p>
      </div>
      <div className='flex items-center justify-end mt-6 lg:col-span-2'>
        <a href='https://www.instagram.com/pranav_bh003/' target='_blank' rel='noopener noreferrer' className='mr-2'>
          <FaInstagram size={30} />
        </a>
        <a href='https://twitter.com/Pranav_bh003' target='_blank' rel='noopener noreferrer' className='mr-2'>
          <FaTwitterSquare size={30} />
        </a>
        <a href='https://github.com/Pranavbj' target='_blank' rel='noopener noreferrer' className='mr-2'>
          <FaGithubSquare size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
