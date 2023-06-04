import React from 'react';

const Cards = () => {
  const cards = [
    {
      id: 1,
      venue: 'Venue 1',
      date: 'June 1, 2023',
      admin: 'John Doe',
     
    },
    {
      id: 2,
      venue: 'Venue 1',
      date: 'June 5, 2023',
      admin: 'Jane Smith',
      
    },
    {
      id: 3,
      venue: 'Venue 1',
      date: 'June 10, 2023',
      admin: 'John Doe',
      
    },
    {
        id: 3,
        venue: 'Venue 1',
        date: 'June 10, 2023',
        admin: 'John Doe',
        
      },
      {
        id: 3,
        venue: 'Venue 1',
        date: 'June 10, 2023',
        admin: 'John Doe',
        
      },
      {
        id: 3,
        venue: 'Venue 1',
        date: 'June 10, 2023',
        admin: 'John Doe',
        
      },
  ];

  return (
    <div  className="mb-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-[1300px] m-auto">
      <div className="flex flex-col w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pt-10 pb-8 text-center">
          <h3 className="uppercase py-6 text-center md:text-2xl tracking-[20px]">Upcoming Events</h3>
          <p className="py-2">Your Upcoming Events</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 sm:px-8">
          {cards.map(({ id, venue, date, admin}) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <div className="text-center">
                <p className="py-5 text-2xl md:text-xl">{venue}</p>
                <p className="text-lg">{date}</p>
                <p className="text-lg">Admin: {admin}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-violet-800">
                  Button
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
