import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function PublicEvents() {
  const slides = [
    {
      venue: 'Event Venue 1',
      date: 'June 10, 2023',
      admin: 'John Doe',
      url: 'https://img.freepik.com/premium-vector/show-light-stage-podium-scene-with-award-ceremony-purple-background-vector_3482-8515.jpg',
    },
    {
      venue: 'Event Venue 2',
      date: 'June 15, 2023',
      admin: 'Jane Smith',
      url: 'https://img.freepik.com/premium-vector/show-light-stage-podium-scene-with-award-ceremony-purple-background-vector_3482-8515.jpg',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <h1 className="my-8 mb-4 font-sans text-5xl font-bold text-center text-white">Public Events</h1>

      <div className="max-w-[1300px] h-[550px] w-full m-auto py-16 px-4 relative group my-6">
        <div>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-full rounded-2xl bg-center bg-cover duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                slideIndex === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.url}
                alt="Event Slide"
                className="rounded-md duration-200 hover:scale-105 md:w-full md:h-[550px] opacity-40 group-hover:opacity-80 "
              />
              <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 className="text-3xl font-bold text-white">{slide.venue}</h2>
                <p className="mt-4 text-lg text-white">{slide.date}</p>
                <p className="text-lg text-white">Admin: {slide.admin}</p>
                <button className="px-6 py-3 mt-4 font-semibold text-white bg-blue-500 rounded-lg">
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} color="white" />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} color="white" />
        </div>

        <div className="flex justify-center py-2 top-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currentIndex ? 'text-white' : 'text-gray-500'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicEvents;
