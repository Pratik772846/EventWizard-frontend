import React from 'react';
import { useBearStore } from '../../../store/index.js';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from './Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { name, email } = useBearStore((state) => state.userProfile);
  const contact_number = '1234567890';
  const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKb0yIk6Ro-E4nHg7TboZoLqLV84IHQZTaQ&usqp=CAU';

  const renderProfileImage = () => {
    if (image) {
      return <img src={image} alt="Profile" className="w-24 h-24 mx-auto rounded-full" />;
    } else {
      return <FaUserCircle className="w-24 h-24 mx-auto text-gray-300" />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white md:flex-row">
        <div className="w-full max-w-md p-6 bg-white border-4 border-indigo-200 rounded-lg shadow-lg md:w-2/3 md:h-120 shadow-blue-700">
          <h2 className="mb-6 text-3xl font-bold text-center">User Profile</h2>
          <div className="flex flex-col items-center justify-center mb-6">
            <div>{renderProfileImage()}</div>
            <div className="mt-4 text-center">
              <h3 className="mb-2 text-xl font-medium">{name}</h3>
              <p className="text-gray-800">{email}</p>
              <p className="text-gray-800">{contact_number}</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-col items-center justify-center mb-6 md:justify-between">
            <div className="flex flex-col md:flex-row">
              <button className="px-4 py-2 mb-2 mr-2 font-semibold text-white bg-blue-500 rounded md:mb-0 hover:bg-blue-700">
                <Link to="/edit-profile">Edit Profile</Link>
              </button>
              <button className="px-8 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700">
                <Link
                  to="/home"
                 
                >
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 md:w-1/3 md:mt-0 md:ml-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuG-1sL9aUGxNGXIL0xLZQ39gV3gCnw7iUg&usqp=CAU"
            alt="profile icon"
            className="w-48 h-48 ml-6 md:w-[500px] md:h-[500px] md:rounded-full md:shadow-2xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
