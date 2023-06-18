import { useParams ,useOutletContext} from "react-router-dom";
const Details = () =>{

    const {id} = useParams();
    console.log(id);
    const [details,setDetails] = useOutletContext();
    console.log(details);
    return(
        <>
            Details
        </>
    )
}

export default Details;