import { useOutletContext } from "react-router-dom";
import Shimmer from "../../Shimmer/Shimmer";
const Guests = ()=>{
    const [details,setDetails] = useOutletContext();
    // console.log(details);
    const guests = details?.guests;
    console.log(guests);

    const items = ["Item 1", "Item 2", "Item 3"];
    const showGuests = ()=>{
        {guests.map((item, index) => (
            <p 
              key={index} 
              className="bg-color3 w-10 h-10"
            >
            {item}</p>
        ))}
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

    return(
        <>
        <span>Guests List</span>
        {guests.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        {/* {showGuests()}
         */}
        {/* {guests.length === 0 ? shimmerui():showGuests()} */}
        

        
        
        </>
    )
}

export default Guests;