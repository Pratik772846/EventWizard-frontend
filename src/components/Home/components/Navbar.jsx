import React, { useState, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  const [notificationCount, setNotificationCount] = useState(5); // Replace with your notification count logic

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    if (!isSearchExpanded) {
      setIsSearchExpanded(true);
      setIsNotificationVisible(false); 
      searchInputRef.current.focus();
    } else {
      setIsSearchExpanded(false);
      setSearchText('');
      setIsNotificationVisible(true); 
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      toggleSearch();
    }
  };

  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add other profile data as needed
  };

  return (
    <nav className="py-4 text-white bg-color6">
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold">Event Management</h1>
        <div className="flex items-center">
          {isSearchExpanded ? (
            <div className="relative flex items-center px-2 bg-gray-200 rounded-full">
              <input
                ref={searchInputRef}
                className="w-full p-2 text-black bg-transparent focus:outline-none"
                type="text"
                placeholder="Search events"
                value={searchText}
                onChange={handleSearchInputChange}
                onKeyPress={handleSearchInputKeyPress}
              />
              {searchText && (
                <button
                  className="absolute text-gray-500 top-1 right-2 focus:outline-none"
                  onClick={() => {
                    setSearchText('');
                  }}
                >
                  X
                </button>
              )}
            </div>
          ) : (
            <button
              className="flex items-center p-2 bg-gray-200 rounded-full"
              onClick={toggleSearch}
            >
              <AiOutlineSearch size={25} />
            </button>
          )}
          {isNotificationVisible && notificationCount > 0 && (
            <div className="relative pb-5 pl-10 ml-2">
              <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full ">
                <RiNotification3Line />
              </div>
              <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {notificationCount}
              </div>
            </div>
          )}
          <div className="ml-4 sm:ml-8">
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              <FaUserCircle className="mr-2" size={24} />
              <span>{userProfile.name}</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 z-10 mt-2 text-gray-800 bg-white rounded shadow">
                <li className="px-2 py-1 hover:bg-gray-200">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="px-2 py-1 hover:bg-gray-200">Events</li>
                <li className="px-2 py-1 hover:bg-gray-200">Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
