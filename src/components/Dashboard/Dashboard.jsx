import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LineChart from './components/LineChart';
import StackChart from './components/StackChart';

const App = () => {
  const currentColor = 'cyan';
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
      <div className="flex">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} currentColor={currentColor} screenSize={screenSize} />
        <div className="flex flex-col items-center p-10">
          <div className="w-[1000px]">
            <LineChart />
          </div>
          <div className="w-[1000px]">
            <StackChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
