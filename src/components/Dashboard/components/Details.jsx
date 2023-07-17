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
            <div className="flex gap-10 flex-col lg:flex-row justify-center md:justify-start items-center">
                <img src={event} alt="Event-Image"
                className="w-1/2" />
                <div className="flex flex-col justify-around items-center w-full h-full">
                    <span
                    className="text-5xl text-bold">
                        {details?.name ? details?.name : "Name"}
                    </span>
                    <span
                    className="text-5xl text-bold">
                        {details?.venue ? details?.venue : "Venue"}
                    </span>
                    <span
                    className="text-5xl text-bold">
                        {details?.description ? details?.description : "Description"}
                    </span>
                </div>
            </div>

                  
            {/* <Link to={`/dash/${id}/guests`} 
            className=" px-6 py-3 m-4 text-center text-white rounded-lg text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                View Guests
            </Link> */}
            <button 
            className=" px-6 py-3 m-4 text-center text-white rounded-lg text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                View Admin
            </button>
            {details?.adminId}
            

        </div>
    )
}

export default Details;