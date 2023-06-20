import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col px-10 mx-auto text-center sm:bg-white'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col p-4 pt-8 md:w-[40%] justify-center max-w-screen mx-auto'>
          <div className='pb-8 mt-8'>
            <h3 className='uppercase text-gray-500 text-2xl tracking-[20px] mt-6'>Contact</h3>
            <p className='pt-6'>Contact us for any problem you face</p>
          </div>

          <div className='flex items-center justify-center'>
            <form action='https://getform.io/f/c526c6e4-df1c-4ee7-bfa3-01882a0fa2d2' method='POST' className='flex flex-col w-full'>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='p-2 border-2 rounded-md focus:outline-none focus:outline-[#F7AB0A]'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                className='my-4 p-2 border-2 rounded-md focus:outline-[#F7AB0A]'
                required
              />
              <textarea
                name='message'
                rows='10'
                placeholder='Enter your message'
                className='p-2 border-2 rounded-md focus:outline-[#F7AB0A]'
              ></textarea>

              <div className='items-center'>
                <button className='group w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-[#F7AB0A] cursor-pointer mx-auto hover:scale-110 duration-300'>
                  <b>Send</b>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='flex items-center justify-center md:w-[50%]'>
          <img
            src='https://res.cloudinary.com/dv8zwrzop/image/upload/v1685890603/EventWizard/landing_zlub2q.jpg'
            alt='Landing Page Image'
            className='w-80 md:w-2/3 lg:w-1/2'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
