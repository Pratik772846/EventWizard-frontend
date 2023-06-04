import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add other profile data as needed
  };

  return (
    <nav className="py-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold">Event Management</h1>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-full sm:w-[400px] lg:w-[500px] ml-4 sm:ml-8">
          <AiOutlineSearch size={25} className="mr-2" />
          <input
            className="w-full p-2 text-black bg-transparent focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>
        <div className="relative ml-4 sm:ml-8">
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
    </nav>
  );
};

export default Navbar;
