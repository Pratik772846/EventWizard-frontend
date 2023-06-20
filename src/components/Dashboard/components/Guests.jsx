import { useEffect,useState } from "react";
import { useOutletContext } from "react-router-dom";
import Shimmer from "../../Shimmer/Shimmer";
import logo from "../../../assets/logo.jpg";

const Guests = ()=>{
    const [details,setDetails] = useOutletContext();
    const [guests,setGuests] = useState("");
    // console.log(details);
    // const guests = details?.guests;
    console.log(details?.guests);
    useEffect(()=>{
        setGuests(details?.guests);
    },[])

    const handleClick = (userId)=>{
      console.log(userId);
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

    const showGuests=()=>(
        <div className="flex flex-row flex-wrap justify-center items-center gap-20  py-10">
        {guests.map(({ _id,userId, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white w-96 flex flex-col justify-center items-center gap-5">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={logo} alt="Guest Image" className="w-20 h-20 rounded-full pt-2" />
              <p className="pt-6 text-4xl  "> {name.toUpperCase()}</p>
            </div>
            <button 
                  className=" px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
                  onClick={()=>handleClick(userId)}
                  >View Details
            </button>
          </div>
        ))}
    </div>
      )

    return(
        <div className="w-full h-full bg-color6  ">
            {guests.length===0 ? shimmerui() : showGuests()}
        </div>
    )
}

export default Guests;