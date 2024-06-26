import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiNotification3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken.jsx';
import { useBearStore } from '../../../store/index.js';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const setProfile = useBearStore((state) => state.setUserProfile);

  const invitationCount = useBearStore((state) => state.invitationsCount);

  

  const fetchUserProfile = async () => {
    const accessToken = await Refresh();
    console.log(accessToken);
  
    const userId = sessionStorage.getItem('id');
    console.log(userId);
  
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
  
    try {
      const response = await axios.get(
        `https://eventwizard-backend.onrender.com/user/${userId}`,
        config
      );
      const { name, email, } = response.data.user;
      const profile = { name, email};   
      console.log(response.data.user); 
      setUserProfile({ name, email });
      setProfile(profile);
    } catch (error) {
      console.error('Error retrieving user profile:', error);
    }
  };
  
  useEffect(()=>{
    fetchUserProfile();
  },[]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = async() => {
    e.preventDefault();
    try {
      console.log(details);
      const response = await Axios.post('https://eventwizard-backend.onrender.com/user/login',{
        email:details.email,
        password:details.password
        });
        console.log(response);
        console.log(response.data.message);
        if(response.data.message==='Auth successful'){
          
          // await Login();
          state.isAuthenticated = true;
          sessionStorage.setItem('id',response?.data?.id);
          sessionStorage.setItem('refreshToken',response?.data?.refreshToken);
          sessionStorage.setItem('isAuthenticated',true);
          console.log(state);
          console.log(state.isAuthenticated)
          // console.log(state.isAuthenticated);
          navigate('/home',{ replace: true });
        }
        else{
          navigate('/',{replace:true});
        }
        toast(response.data.message);
    } catch (error) {
      console.log(error.message);
      toast(error.message);
    }
  }

  return (
    <nav className="py-4 text-white bg-color6">
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold">Event Management</h1>
        <div className="relative">
          <div className="flex items-center">
            {isNotificationVisible && invitationCount > 0 && (
              <div className="relative pb-5 pl-10 ml-2">
                <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full">
                  <RiNotification3Line />
                </div>
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {invitationCount}
                </div>
              </div>
            )}
            <div className="ml-4 sm:ml-8">
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <FaUserCircle className="mr-2" size={24} />
                {userProfile ? (
                  <span>{userProfile.name}</span>
                ) : (
                  <span>Loading...</span>
                )}
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 z-10 mt-2 text-gray-800 bg-white rounded shadow">
                  <li className="px-2 py-1 hover:bg-gray-200">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-200">Events</li>
                  <li className="px-2 py-1 hover:bg-gray-200" onClick={logout}>Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
