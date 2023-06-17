import { Link } from "react-router-dom";
const Invitations = ()=>{
    return(
        <div className="flex flex-col items-center justify-center mx-auto text-white h-650px max-w-[1300px] bg-color6 mb-4 h-[350px]">
            <h1 className="mb-4 text-4xl font-bold">Your Invitations</h1>
            <Link to="/invitations" className="w-1/2 px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2">
                  View
            </Link>
        </div>
    )
}
export default Invitations;