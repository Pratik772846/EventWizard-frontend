import React from 'react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto text-white h-650px max-w-[1300px] bg-color6 mb-4">
      <h1 className="mb-4 text-2xl font-bold">Create Your Own Event</h1>
      <Link to="/event-creation">
        <button className="px-4 py-2 mb-3 text-white bg-blue-500 rounded hover:bg-blue-600">
          Create Event
        </button>
      </Link>
    </div>
  );
};

export default CreateEvent;
