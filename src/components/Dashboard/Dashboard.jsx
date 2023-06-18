import React from 'react';
import {Outlet,useParams} from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Refresh from "../../hooks/useRefreshtoken.jsx";
import axios from "axios";

const App = () => {
  const currentColor = 'cyan';
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
  const [details,setDetails] = React.useState("sddddd");

  const {id} = useParams();
  console.log(id);

  const userId  = sessionStorage.getItem('id');
  console.log(userId);

  const getEvent = async()=>{
    const accessToken= await Refresh();
    console.log(accessToken);

    // const userId  = sessionStorage.getItem('id');
    // console.log(userId);

    const config = {
      headers:{
        'authorization' : `Bearer ${accessToken}`
      }
    }

    try {
      const response = await axios.get(`https://eventwizard-backend.onrender.com/events/${id}`,config);
      // console.log(response);
      console.log(response?.data);
      // setEvents(response?.data);
      // setFilteredEvents(response?.data);
      setDetails(response?.data);
    } catch (error) {
      console.error(error);
    }
  }
  React.useEffect(()=>{
    getEvent();
  },[]);

  React.useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar currentColor={currentColor} screenSize={screenSize} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className='flex flex-row w-full'>
        <div className='w-1/5'>
          <Sidebar 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu} 
            currentColor={currentColor} 
            screenSize={screenSize} 
            message={details}/>
        </div>
        <div className='w-4/5'>
          <Outlet context={[details,setDetails]}/>
        </div>
      </div>
    </>
  );
};

export default App;
