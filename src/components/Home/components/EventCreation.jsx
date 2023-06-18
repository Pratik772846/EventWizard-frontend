import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken.jsx';
import { Link } from 'react-router-dom';

const EventCreation = () => {
  const userId = sessionStorage.getItem('id');
  // console.log(userId);
  const [nameValue, setNameValue] = useState();
  const [venueValue, setVenueValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [budgetValue, setBudgetValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const [isPrivateValue, setIsPrivateValue] = useState(false);
  const [isAdminValue, setIsAdminValue] = useState(true);
  const [adminEmailValue, setAdminEmailValue] = useState(userId);

  const nameInputRef = useRef(null);

  const handleCreate = async () => {
    if (!nameValue || !venueValue || !dateValue || !budgetValue || !descriptionValue || !adminEmailValue) {
      toast.error('Please fill in all required fields');
      return;
    }
    try {
      const accessToken = await Refresh();
      console.log(accessToken);

      const response = await axios.post(
        'https://eventwizard-backend.onrender.com/events/create',
        {
          name: nameValue,
          venue: venueValue,
          date: dateValue,
          budget: budgetValue,
          description: descriptionValue,
          isPrivate: isPrivateValue,
          isAdmin: isAdminValue,
          adminId: adminEmailValue,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const eventData = response.data;

      console.log(eventData);
      // console.log(response);
      toast.success('Event created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen p-4 bg-white">
      <div className="flex flex-wrap max-w-md p-6 bg-white border-4 border-indigo-500 rounded-lg shadow-lg md:p-8">
        <div className="w-full pr-0 mb-4 md:w-1/2 md:mb-0">
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
          </div>
          <div>
            <button
              onClick={handleCreate}
              className="w-full px-2 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLCmsWxqaI8JbDx7UtzxUd4aVOaTmzwSQRg&usqp=CAU"
            alt="gif"
            className="w-48 mx-auto mt-4 md:w-full md:mt-0"
          />
        </div>
      </div>
      <div className="mt-4">
        <Link
          to="/home"
          className="w-1/2 px-6 py-3 m-4 text-xl text-center duration-200 hover:scale-105 bg-gradient-to-r from-color1 to-color2"        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default EventCreation;
