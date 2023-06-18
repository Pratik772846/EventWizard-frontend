// import React from 'react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto text-white h-650px max-w-[1300px] bg-color6 mb-4 h-[350px] mt-10">
      <h1 className="mb-4 text-4xl font-bold">Create Your Own Event</h1>
      <Link to="/event-creation">
        <button className="px-4 py-4 mb-3 text-white duration-200 rounded bg-gradient-to-r from-color1 to-color2 hover:bg-blue-600 hover:scale-105">
          Create Event
        </button>
      </Link>
    </div>
  );
};

export default CreateEvent;
