import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const currentColor = ' cyan ';
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar currentColor={currentColor} screenSize={screenSize} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className='w-full flex flex-row'>
        <div className='w-1/5'>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} currentColor={currentColor} screenSize={screenSize} />
        </div>
        <div className='w-4/5'>
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default App;
