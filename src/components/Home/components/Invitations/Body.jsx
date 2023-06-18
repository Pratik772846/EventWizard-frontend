import Invite from "./Invite.jsx";
import { Link } from "react-router-dom";
const Body = ()=>{
    return(
        <div className="flex flex-col flex-wrap justify-center items-center bg-color3 gap-10 mx-20 py-20">
            <Invite/>
            <Invite/>
            <Invite/>
            <Invite/>
            <Invite/>
            <Invite/>
            <Invite/>

            <Link to="/home" className="w-1/2 px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                  Back to home
            </Link>
        </div>
    )
}

export default Body;