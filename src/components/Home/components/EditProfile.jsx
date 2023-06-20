import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useBearStore } from '../../../store/index.js';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken.jsx';
import Navbar from './Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import { Link , useNavigate} from 'react-router-dom';

const EditProfile = () => {
  const { name, email} = useBearStore((state) => state.userProfile);

  const contact_number = '1234567890';

  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [phoneValue, setPhoneValue] = useState(contact_number);

  const navigate = useNavigate();
  const handleEdit = async () => {
    if (!nameValue || !emailValue || !phoneValue) {
      toast.error('Please fill in all fields');
      return;
    }

    const updatedProfile = {
      name: nameValue,
      email: emailValue,
      contact_number: phoneValue,
    };

    try {
      const userId = sessionStorage.getItem('id');
      const accessToken = await Refresh();

      const config = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.put(
        `https://eventwizard-backend.onrender.com/user/${userId}`,
        updatedProfile,
        config
      );

      if (response.status === 200) {
        useBearStore.setState({ userProfile: updatedProfile });
        toast.success('Profile updated successfully');
        navigate('/profile'); 
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white md:flex-row">
      <div className="w-full max-w-md p-6 bg-white border-4 border-indigo-200 rounded-lg shadow-lg md:w-2/3 md:h-120 shadow-blue-700">
          <h2 className="mb-4 text-2xl font-semibold text-center">Edit Your Profile</h2>
          <div className="mb-6">
            <label htmlFor="nameInput" className="block mb-2">
              Name:
              <input
                id="nameInput"
                type="text"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300"
              />
            </label>
            <label htmlFor="emailInput" className="block mb-2">
              Email:
              <input
                id="emailInput"
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300"
              />
            </label>
            <label htmlFor="phoneInput" className="block mb-2">
              Phone:
              <input
                id="phoneInput"
                type="text"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300"
              />
            </label>
          </div>
          <div className="flex flex-col items-center justify-center mb-6 md:justify-between">
          <div className="flex flex-col md:flex-row">
          <button
            onClick={handleEdit}
            className="px-4 py-2 mb-2 mr-2 font-semibold text-white bg-blue-500 rounded md:mb-0 hover:bg-blue-700"          >
            Save
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhl6_v4-O41-nj3HpiiwDmK7VrapH74GA0g&usqp=CAU"
            alt="profile icon"
            className="w-48 h-48 ml-6 md:w-[500px] md:h-[500px] md:rounded-full md:shadow-2xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
