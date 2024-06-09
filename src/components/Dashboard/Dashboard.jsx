import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Refresh from '../../hooks/useRefreshtoken.jsx';
import axios from 'axios';

const Dash = () => {
  const currentColor = 'tomato';
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
  const [details, setDetails] = React.useState('sddddd');
  
  const { id } = useParams();
  const getEvent = async () => {
    const accessToken = await Refresh();
    console.log(accessToken);

    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        `https://eventwizard-backend.onrender.com/events/${id}`,
        config
      );
      console.log(response?.data);
      setDetails(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getEvent();
  }, []);

  React.useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-gray-100 relative flex flex-col h-screen'>
      <div className='fixed top-0 w-full'>
        <Navbar
          currentColor={currentColor}
          screenSize={screenSize}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      
      
      <div className="flex flex-row h-full w-full mt-14 pt-1   ">
        <div className={` fixed h-full ${activeMenu ? 'w-1/5 md:w-1/3 lg:w-1/5' :'w-0'} grow bg-color2 `}>
          <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            currentColor={currentColor}
            screenSize={screenSize}
            message={details}
          />
        </div>
        <div className={`flex-1 pl-96 ${activeMenu ? 'w-4/5 md:w-2/3 lg:w-4/5' : 'w-full'} overflow-y-auto`}>
          <Outlet context={[details, setDetails]} />
        </div>
      </div>

    </div>
  );
};

export default Dash;
