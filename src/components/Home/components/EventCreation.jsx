import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken.jsx';

const EventCreation = () => {
  const [nameValue, setNameValue] = useState('');
  const [venueValue, setVenueValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [budgetValue, setBudgetValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [isPrivateValue, setIsPrivateValue] = useState(false);
  const [isAdminValue, setIsAdminValue] = useState(true);
  const [adminEmailValue, setAdminEmailValue] = useState('');

  const nameInputRef = useRef(null);

  const handleCreate = async () => {
    if (!nameValue || !venueValue || !dateValue || !budgetValue || !descriptionValue || !adminEmailValue) {
      toast.error('Please fill in all required fields');
      return;
    }

    

    try {

      const accessToken= await Refresh();
    console.log(accessToken);
      
      // const response = await axios.post(
      //   'https://eventwizard-backend.onrender.com/events/create',
      //   {
      //     name: nameValue,
      //     venue: venueValue,
      //     date: dateValue,
      //     budget: budgetValue,
      //     description: descriptionValue,
      //     isPrivate: isPrivateValue,
      //     isAdmin: isAdminValue,
      //     adminEmail: adminEmailValue
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`
      //     }
      //   }
      // );

      // const eventData = response.data;

      

      // console.log(eventData);
      // console.log(response);
      toast.success('Event created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-color6">
      <div className="max-w-md p-6 bg-white border border-indigo-500 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Create Your Own Event</h2>
        <div className="mb-6">
          <label htmlFor="nameInput" className="block mb-2">
            Name:
            <input
              id="nameInput"
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300"
              ref={nameInputRef}
            />
          </label>
          <label htmlFor="venueInput" className="block mb-2">
            Venue:
            <input
              id="venueInput"
              type="text"
              value={venueValue}
              onChange={(e) => setVenueValue(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300"
            />
          </label>
          <label htmlFor="dateInput" className="block mb-2">
            Date:
            <input
              id="dateInput"
              type="date"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300"
            />
          </label>
          <label htmlFor="budgetInput" className="block mb-2">
            Budget:
            <input
              id="budgetInput"
              type="number"
              value={budgetValue}
              onChange={(e) => setBudgetValue(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300"
            />
          </label>
          <label htmlFor="descriptionInput" className="block mb-2">
            Description:
            <textarea
              id="descriptionInput"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300"
            />
          </label>
          <label htmlFor="isPrivateInput" className="block mb-2">
            Is Private:
            <input
              id="isPrivateInput"
              type="checkbox"
              checked={isPrivateValue}
              onChange={(e) => setIsPrivateValue(e.target.checked)}
              className="mt-1"
            />
          </label>
          <label htmlFor="isAdminInput" className="block mb-2">
            Is Admin:
            <input
              id="isAdminInput"
              type="checkbox"
              checked={isAdminValue}
              onChange={(e) => setIsAdminValue(e.target.checked)}
              className="mt-1"
            />
          </label>
          {isAdminValue && (
            <label htmlFor="adminEmailInput" className="block mb-2">
              Admin Email:
              <input
                id="adminEmailInput"
                type="email"
                value={adminEmailValue}
                onChange={(e) => setAdminEmailValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300"
              />
            </label>
          )}
        </div>
        <button
          onClick={handleCreate}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default EventCreation;
