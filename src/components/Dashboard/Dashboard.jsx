import React from 'react';
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
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} currentColor={currentColor} screenSize={screenSize} />
    </>
  );
};

export default App;
