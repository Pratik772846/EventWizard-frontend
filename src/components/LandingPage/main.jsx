// import React from 'react'

import Footer from "../Footer/Footer";
import Navbar from "./components/Navbar";
import {Outlet} from 'react-router-dom';


const Dashboard=()=> {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}


export default Dashboard
