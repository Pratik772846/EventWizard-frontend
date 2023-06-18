import {useState,useEffect} from 'react';
import axios from "axios";
import Refresh from "../../../hooks/useRefreshtoken";
import Shimmer from '../../Shimmer/Shimmer';
import { Link } from 'react-router-dom';

const Cards = () => {

  const [events,setEvents] = useState([]);

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
      const response = await axios.post("https://eventwizard-backend.onrender.com/events",{
        id:userId
      },config);
      // console.log(response);
      console.log(response?.data?.events);
      setEvents(response?.data?.events);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getEvents();
  },[]);


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
          {events.map(({ _id, venue, name, description}) => (
            <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-slate-800">
              <div className="text-center ">
                <p className="py-5 text-2xl md:text-xl">{venue}</p>
                <p className="text-lg">{name}</p>
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
  
  if(!events) return null;

  return (
    <div  className="mb-4 text-white bg-color6 max-w-[1300px] m-auto">
      <div className="flex flex-col w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pt-10  text-center">
          <h2 className="uppercase py-6 text-center md:text-2xl tracking-[20px]">Your Upcoming Events</h2>
        </div>
        {events.length===0?shimmerui():showEvents()}
      </div>
    </div>
  );
};

export default Cards;
