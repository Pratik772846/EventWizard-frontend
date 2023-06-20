import React from 'react'
const Services = () => {

    const services = [
        {
            id:1,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MlbOMrj7XBDfN70yaPef8AwXxDr0_wG83g&usqp=CAU",
            title: 'Budget Tracking',
            style:'shadow-blue-500',
        },
     
        {
            id:2,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MlbOMrj7XBDfN70yaPef8AwXxDr0_wG83g&usqp=CAU",
            title: 'Guest Invitation',
            style:'shadow-pink-600',
        },
        {
            id:3,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MlbOMrj7XBDfN70yaPef8AwXxDr0_wG83g&usqp=CAU",
            title: 'Group Chat With Guests',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MlbOMrj7XBDfN70yaPef8AwXxDr0_wG83g&usqp=CAU",
            title: 'Publically announced events',
            style:'shadow-green-400',
        },
        {
            id:5,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MlbOMrj7XBDfN70yaPef8AwXxDr0_wG83g&usqp=CAU",
            title: 'Creation Of your own event',
            style:'shadow-orange-600',
        },
        
    ]

  return (
    <div name = "Services" className='w-full bg-white'>
      <div className='flex flex-col w-full h-full max-w-screen-lg mx-auto text-black sm:p-4'>
        <div className='pb-8 mt-10 text-center '>
        <h3 className='uppercase py-3 text-center md:text-2xl tracking-[20px] '>Services</h3>
        </div>

        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center md:grid-cols-3'>

            {services.map(({id,src,title,style})=>(
                 <div key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
                 <img src={src} alt = '' className='w-40 mx-auto'></img>
                 <p className='mt-4'>{title}</p>
             </div>
            ))}

           
        </div>
        </div>
        
    </div>
  )
}

export default Services
