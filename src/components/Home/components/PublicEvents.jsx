import  { useState,useEffect } from 'react';
import axios from 'axios';
import Refresh from '../../../hooks/useRefreshtoken';
import Shimmer from '../../Shimmer/Shimmer';
import {Link} from "react-router-dom";

function PublicEvents() {
  const [events,setEvents] = useState("");
  const [filteredEvents,setFilteredEvents] = useState("");
  const [searchText,setSearchText] = useState("");

  const getEvents = async()=>{
    const accessToken= await Refresh();
    console.log(accessToken);

    const userId  = sessionStorage.getItem('id');
    console.log(userId);

    const config = {
      headers:{
        'authorization' : `Bearer ${accessToken}`
      }
    }

    try {
      const response = await axios.get("https://eventwizard-backend.onrender.com/events",config);
      // console.log(response);
      console.log(response?.data);
      setEvents(response?.data);
      setFilteredEvents(response?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getEvents();
  },[]);
  

  const handleChange = (e)=>{
    console.log(e.target.value);

    setSearchText(e.target.value);
  }

  const handleSubmit = ()=>{
    const filtered = events.filter((item)=> item?.name.includes(searchText));
    console.log(filteredEvents);
    setFilteredEvents(filtered);
    console.log(events);
    console.log(filteredEvents);
  }
  
  const shimmerui = ()=>(
    <div className='flex flex-wrap justify-center items-center pb-12'>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
    </div>
  )

  const showEvents =()=>(
    <div className="grid gap-8 md:grid-cols-3 sm:px-8 ">
          {filteredEvents.map(({ _id, venue, name, description}) => (
            <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-slate-800 w-72">
              <div className="text-center ">
                <p className="py-5 text-2xl md:text-xl">{name}</p>
                <p className="text-lg">{venue}</p>
                <p className="text-lg">description: {description}</p>
              </div>
              <div className="flex items-center justify-center">
                <Link to={`/dash/${_id}`} className="w-1/2 px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
  )



  console.log(filteredEvents);
  // search functionality added . now to show the events use filteredEvents.map()

  return (
    <>
      
      {/* <h1 className="my-8 mb-4 font-sans text-5xl font-bold text-center text-white">Public Events</h1> */}
      <div  className="mb-4 text-white bg-color6 max-w-[1300px] m-auto">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className='flex flex-row gap-10 mt-10'>
           <input 
              type="text" 
              name="events"
              value={searchText}
              autoComplete="off"
              placeholder="Search for Public Events"
              className='h-11 w-96 rounded-md text-red-400 focus:outline-none  text-lg pl-3 placeholder-black'
              onChange={handleChange}
            />
            <button 
              className="w-40 px-6  text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
              onClick={handleSubmit}>
              Search
            </button>
        </div>
        <div className="pt-10  text-center">
          <h2 className="uppercase py-6 text-center md:text-2xl tracking-[20px]">Public Events</h2>
        </div>
        {/* {shimmerui()} */}
        {filteredEvents.length===0?shimmerui():showEvents()}
      </div>
    </div>
    </>
  );
}

export default PublicEvents;
