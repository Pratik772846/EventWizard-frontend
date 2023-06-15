import { useParams } from "react-router-dom"
const Guests = ()=>{
    const {id} = useParams();
    return(
        <>
        {`id is : ${id}`}
        guests list
        </>
    )
}

export default Guests;