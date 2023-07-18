import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import {SiInvoiceninja} from "react-icons/si";
import { RiNotification3Line } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import {BiDetail} from 'react-icons/bi';
import {GiShinyPurse} from "react-icons/gi";
import { useEffect } from 'react';

const Sidebar = ({ activeMenu, setActiveMenu, currentColor, screenSize, message }) => {
  console.log(message);
  const [admin, setAdmin] = useState(false);
  const [activeLink, setActiveLink] = useState('details'); // Set 'details' as the initial active link

  const userId = sessionStorage.getItem('id');
  console.log(userId);

  console.log(admin);
  useEffect(() => {
    if (message?.adminId === userId) {
      setAdmin(true);
    }
  }, [message]);

  const { id } = useParams();
  const links = [
    {
      title: '',
      links: [
        {
          name: 'notifications',
          icon: <RiNotification3Line />,
        },
        {
          name: 'guests',
          icon: <IoMdContacts />,
        },
      ],
    },
  ];

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLinkStyle = {
    backgroundColor: currentColor,
    color: 'white',
  };

  const normalLinkStyle = {
    backgroundColor: '',
    color: 'black',
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    handleCloseSidebar();
  };

  const InviteUsers = () => {
    return (
      <div>
        <NavLink
          to={`/dash/${id}/invite_users`}
          onClick={() => handleLinkClick('invite_users')}
          style={activeLink === 'invite_users' ? activeLinkStyle : normalLinkStyle}
          className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-xl text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
        >
          {<SiInvoiceninja />}
          <span className="capitalize">Invite Users</span>
        </NavLink>
      </div>
    );
  };

  const Budget = ()=>{
    return(
      <div>
        <NavLink
          to={`/dash/${id}/budget`}
          onClick={() => handleLinkClick('budget')}
          style={activeLink === 'budget' ? activeLinkStyle : normalLinkStyle}
          className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-xl text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
        >
          {<GiShinyPurse />}
          <span className="capitalize">Budget</span>
        </NavLink>
      </div>
    )
  }

  return (
    <div className=" pb-10 ml-3 pr-3">
      <>
        {activeMenu && (
          <>
            <div className="flex items-center justify-between">
              <Link
                to="/home"
                onClick={handleCloseSidebar}
                className="flex items-center gap-3 mt-4 ml-3 text-3xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware /> <span>Evento</span>
              </Link>
            </div>
            <div className="mt-10">
              <div>
                <NavLink
                  to={`/dash/${id}`}
                  onClick={() => handleLinkClick('details')}
                  style={activeLink === 'details' ? activeLinkStyle : normalLinkStyle}
                  className="flex items-center gap-5 pl-4 pt-3 pb-2.5 text-xl rounded-lg  m-2"
                >
                  {<BiDetail/>}
                  <span className="capitalize">Details</span>
                </NavLink>
              </div>
              {links.map((item) => (
                <div key={item.title}>
                  <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/dash/${id}/${link.name}`}
                      key={`/${link.name}`}
                      onClick={() => handleLinkClick(link.name)}
                      style={activeLink === link.name ? activeLinkStyle : normalLinkStyle}
                      className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-xl m-2"
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
              {admin ? <InviteUsers /> : null}
              {admin ? <Budget /> : null}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Sidebar;
