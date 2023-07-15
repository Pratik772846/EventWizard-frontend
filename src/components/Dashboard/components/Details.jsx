import { useParams ,useOutletContext} from "react-router-dom";
const Details = () =>{

    const {id} = useParams();
    console.log(id);
    const [details,setDetails] = useOutletContext();
    console.log(details);
    return(
        <div className="h-full bg-gray-100 flex flex-col justify-center items-center">
            <span></span>
        </div>
    )
}

export default Details;