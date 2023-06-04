// import React from 'react'

const Navbar = () => {
  return (
    <div className="drop-shadow-xl bg-slate-100 w-full">
        <nav className="flex justify-around  items-center h-32 ">
            <a href="/" >
              <img src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685900315/EventWizard/evento_c.987980d92e74ea624578_thmmmv.png" 
              className="w-24 md:w-40 lg:w-52" alt="logo" />
            </a>
            <div className="flex gap-5 md:gap-20 lg:gap-40">
                <a href="/" className="text-2xl md:text-3xl lg:text-3xl">Home</a>
                <a href="/" className="text-2xl md:text-3xl lg:text-3xl">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
