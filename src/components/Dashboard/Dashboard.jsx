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
    <>
      <Navbar
        currentColor={currentColor}
        screenSize={screenSize}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="flex flex-row w-full bg-color2">
        <div className={`${activeMenu ? 'w-1/5 md:w-1/3 lg:w-1/5' : 'w-0'} `}>
          <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            currentColor={currentColor}
            screenSize={screenSize}
            message={details}
          />
        </div>
        <div className={`${activeMenu ? 'w-4/5 md:w-2/3 lg:w-4/5' : 'w-full'}`}>
          <Outlet context={[details, setDetails]} />
        </div>
      </div>
    </>
  );
};

export default Dash;
