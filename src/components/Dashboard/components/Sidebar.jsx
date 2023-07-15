import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
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
          className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
        >
          <span className="capitalize">Invite Users</span>
        </NavLink>
      </div>
    );
  };

  return (
    <div className="h-screen pb-10 ml-3">
      <div className="md:w-64" style={{ minHeight: '100vh', maxWidth: '16rem' }}>
        {activeMenu && (
          <>
            <div className="flex items-center justify-between">
              <Link
                to="/home"
                onClick={handleCloseSidebar}
                className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware /> <span>Evento</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
            <div className="mt-10">
              <div>
                <NavLink
                  to={`/dash/${id}`}
                  onClick={() => handleLinkClick('details')}
                  style={activeLink === 'details' ? activeLinkStyle : normalLinkStyle}
                  className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2"
                >
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
                      className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
              {admin ? <InviteUsers /> : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
