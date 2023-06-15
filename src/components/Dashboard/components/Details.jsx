import { useParams } from "react-router-dom";
const Details = () =>{
    const id = useParams();
    console.log(id);
    return(
        <>details
        {`  id is : ${id.id}`}</>
    )
}

export default Details;