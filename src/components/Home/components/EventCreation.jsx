import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken.jsx';
import { Link } from 'react-router-dom';

const EventCreation = () => {
  const userId = sessionStorage.getItem('id');
  const [nameValue, setNameValue] = useState('');
  const [venueValue, setVenueValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [budgetValue, setBudgetValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
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
      toast.success('Event created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dv8zwrzop/image/upload/v1685900315/EventWizard/evento_c.987980d92e74ea624578_thmmmv.png')`,
          filter: 'brightness(5)',
          backgroundSize: '80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      <div className="relative z-10 w-full max-w-3xl p-8 bg-white bg-opacity-50 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Create Your Own Event</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label htmlFor="nameInput" className="block">
              <span className="text-gray-700">Name</span>
              <input
                id="nameInput"
                type="text"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                ref={nameInputRef}
              />
            </label>
            <label htmlFor="venueInput" className="block">
              <span className="text-gray-700">Venue</span>
              <input
                id="venueInput"
                type="text"
                value={venueValue}
                onChange={(e) => setVenueValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label htmlFor="dateInput" className="block">
              <span className="text-gray-700">Date</span>
              <input
                id="dateInput"
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label htmlFor="budgetInput" className="block">
              <span className="text-gray-700">Budget</span>
              <input
                id="budgetInput"
                type="number"
                value={budgetValue}
                onChange={(e) => setBudgetValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label htmlFor="descriptionInput" className="block">
              <span className="text-gray-700">Description</span>
              <textarea
                id="descriptionInput"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label htmlFor="isPrivateInput" className="block">
              <span className="text-gray-700">Is Private</span>
              <input
                id="isPrivateInput"
                type="checkbox"
                checked={isPrivateValue}
                onChange={(e) => setIsPrivateValue(e.target.checked)}
                className="ml-2"
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLCmsWxqaI8JbDx7UtzxUd4aVOaTmzwSQRg&usqp=CAU"
              alt="Event"
              className="w-64 h-64 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <button
          onClick={handleCreate}
          className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Create
        </button>
        <Link
          to="/home"
          className="block w-full px-4 py-2 mt-4 text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default EventCreation;
