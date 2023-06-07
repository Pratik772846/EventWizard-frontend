import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useAppState } from '../../../store/index.js';

const Navbar = () => {
    const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
 
        <button type="button" onClick={customFunction} style={{ color }} className="relative p-3 text-xl rounded-full hover:bg-light-gray">
          <span 
            style={{ background: dotColor }}
            className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
          />
          {icon}
        </button>
      
    );

    const setActiveMenu = useAppState((state) => state.setActiveMenu);
    const isClicked = useAppState((state) => state.isClicked);
    const setIsClicked = useAppState((state) => state.setIsClicked);
    const setScreenSize = useAppState((state) => state.setScreenSize);
    const currentColor = useAppState((state) => state.currentColor);
    const screenSize = useAppState((state) => state.screenSize);
    const activeMenu = useAppState((state) => state.activeMenu);
    
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true});
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton 
        title="Menu" 
        customFunction={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color={currentColor} 
        icon={<AiOutlineMenu />} 
      />

      <div className="flex">
        <NavButton 
          title="Chat" 
          customFunction={() => handleClick('chat')} 
          color={currentColor} 
          dotColor="#03C9D7"
          icon={<BsChatLeft />} 
        />
        <NavButton 
          title="Notifications" 
          customFunction={() => handleClick('notification')} 
          color={currentColor} 
          dotColor="#03C9D7"
          icon={<RiNotification3Line />} 
        />
       
          <div 
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick('userProfile')}
          >
            {/* <img className="w-8 h-8 rounded-full" src={profile} alt="r" /> */}
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="ml-1 font-bold text-gray-400 text-14">Pranav</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
       

        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  )
}

export default Navbar;