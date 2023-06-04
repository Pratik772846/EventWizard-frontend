import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = ({ name }) => {
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handleEdit = () => {
    if (!nameValue || !emailValue || !phoneValue) {
      toast.error('Please fill in all fields');
      return;
    }

   
    toast.success('Profile updated successfully');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white border border-indigo-500 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">User Profile</h2>
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
        <button
          onClick={handleEdit}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
