import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='grid max-w-full gap-8 px-4 py-16 mx-auto mb-0 text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:grid-cols-3'>
      <div className='flex flex-col items-start'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Eventy.</h1>
        <p className='py-4 text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      </div>
      <div className='flex items-center justify-end mt-6 lg:col-span-2'>
        <FaFacebookSquare size={30} className='mr-2' />
        <FaInstagram size={30} className='mr-2' />
        <FaTwitterSquare size={30} className='mr-2' />
        <FaGithubSquare size={30} className='mr-2' />
        <FaDribbbleSquare size={30} className='mr-2' />
      </div>
    </div>
  );
};

export default Footer;
