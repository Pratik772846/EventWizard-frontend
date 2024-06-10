import { useParams ,useOutletContext} from "react-router-dom";
import event from "../../../assets/event.jpg";
import { Link } from "react-router-dom";
const Details = () =>{

    const {id} = useParams();
    console.log(id);
    const [details,setDetails] = useOutletContext();
    console.log(details);
    return(
        <div className="h-full bg-gray-100 flex flex-col justify-start items-center pt-10 gap-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-center md:justify-start items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <img src={event} alt="Event-Image" className="w-full lg:w-1/3 object-cover rounded-lg shadow-md" />
              <div className="flex flex-col justify-around items-start w-full lg:w-2/3 h-full p-4 space-y-6">
                <span className="text-3xl lg:text-4xl font-semibold text-gray-900">
                  Event Host : {details?.name ? details?.name : "Name"}
                </span>
                <span className="text-2xl lg:text-3xl font-medium text-gray-700">
                  Event Location : {details?.venue ? details?.venue : "Venue"}
                </span>
                <span className="text-xl lg:text-2xl text-gray-600">
                  Event Description : {details?.description ? details?.description : "Description"}
                </span>
              </div>
            </div>


                  
            {/* <Link to={`/dash/${id}/guests`} 
            className=" px-6 py-3 m-4 text-center text-white rounded-lg text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                View Guests
            </Link> */}
            <button 
            className=" px-6 py-3 m-4 text-center text-white rounded-lg text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                Event Host Profile
            </button>
            {/* {details?.adminId} */}
            

        </div>
    )
}

export default Details;