import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='relative flex flex-col text-center  mx-auto   px-10 sm:bg-[#F5F5F6]'>
      <div className='flex flex-col p-4 pt-8 md:w-[40%] justify-center max-w-screen mx-auto h-full'>
      <div className='pb-8 mt-8'>
        <h3 className='uppercase text-gray-500 text-2xl tracking-[20px] mt-6'>Contact </h3>
        <p className='pt-6'>Contact us for any problem you face</p>
    </div>


    <div className='flex items-center justify-center'>
        <form action='https://getform.io/f/c526c6e4-df1c-4ee7-bfa3-01882a0fa2d2' method='POST' className='flex flex-col w-full'>
            <input type="text" name = "name" placeholder = "Enter your name" className = "p-2 border-2 rounded-md focus:outline-none focus:outline-[#F7AB0A] " required></input>
            <input type="email" name = "email" placeholder = "Enter your email" className = " my-4 p-2 border-2 rounded-md focus:outline-[#F7AB0A] " required></input>
            <textarea name='message' rows='10' placeholder='Enter your message' className='p-2  border-2 rounded-md focus:outline-[#F7AB0A]'></textarea>

            <div className='items-center'>
            <button className='group w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-[#F7AB0A] cursor-pointer mx-auto hover:scale-110 duration-300' ><b>send</b></button>
            </div>
            
        </form>
    </div>
      </div>

    </div>
  )
}

export default Contact
