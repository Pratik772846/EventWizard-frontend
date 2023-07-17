import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useBearStore } from '../../../store/index'; // Update with the correct path
import ReactModal from 'react-modal';
import {ImCross} from "react-icons/im";
import Sidebarsm from './Sidebarsm';

const Navbar = ({ currentColor, screenSize, setActiveMenu }) => {

  const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
    <button type="button" onClick={customFunction} style={{ color }} className="relative p-3 text-xl rounded-full hover:bg-light-gray">
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
  );

  const NavButton1 = ({ title, customFunction, icon, color, dotColor }) => (
    <button type="button" 
      onClick={customFunction} 
      style={{ color }} 
      className="hidden md:block relative p-3 text-xl rounded-full hover:bg-light-gray">
      {icon}
    </button>
  );

  const [isClicked, setIsClicked] = useState({});
  const bearStore = useBearStore(); // Access the Zustand store
  const { userProfile } = bearStore; 
  const [showModal,setShowModal] = useState(false);

  const handleOpenModal = ()=>{
    setShowModal(true);
  }
  const handleCloseModal = ()=>{
    setShowModal(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const customStyles = {
    content: {
      top: '20%',
      left: '0%',
      right: 'auto',
      bottom: 'auto',
      marginRight: 'auto',
      transform: 'translate(0%, -50%)',
    },
  };

  const handleClick = (clicked) => setIsClicked({ ...isClicked, [clicked]: true });

  const openModal=()=>{
    handleOpenModal();
  }

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex justify-between p-2 md:mx-6 bg-gray-100 ">
      <NavButton1
        title="Menu"
        customFunction={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='md:hidden ml-4'>
          <button
          className='p-3 text-xl rounded-full  pl-3 text-cyan-300'
          onClick={openModal}>
            {<AiOutlineMenu />}
          </button> 
          <ReactModal
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}>
            <div className="flex flex-col">
              <div className="flex justify-end pb-5">
                <button onClick={handleCloseModal} className="text-red-600"><ImCross/></button>
              </div>
              <Sidebarsm/>
            </div>
          </ReactModal>
      </div> 
      
      
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
          <p>
            <span className="text-gray-400 text-14">Hi, </span>
            <span className="ml-1 font-bold text-gray-400 text-14">{userProfile.name}</span> 
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
