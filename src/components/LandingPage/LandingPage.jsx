// import React from 'react'
import Footer from "../Footer/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
        
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-around uppercase items-center my-20 " >
        <span className="max-w-4xl ">
          
          <p className="text-5xl text-bold text-center">celebrate with evento</p>
          <br />
          <p className="text-2xl mx-auto  text-center pt-5">a platform to manage your events</p>
          <br />
          <a href="/login" className="flex justify-center">
            <button className="bg-gradient-to-r from-color1  to-color2 text-white font-mono py-2 px-6 border-b-4 border-color1 hover:border-color2 rounded text-2xl ">
              Get Started
            </button>
          </a>
        </span>
        
        <img 
          src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685890603/EventWizard/landing_zlub2q.jpg" 
          alt="Landing Page Image" 
          className="w-96 md:w-2/3 lg:w-1/2 "/>

      </div>

      <Footer/>
           
        
        
    </div>
  )
}

export default LandingPage