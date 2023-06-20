import Refresh from "../../../hooks/useRefreshtoken.jsx";
import axios from "axios";
import { useEffect,useState } from "react";
import Shimmer from "../../Shimmer/Shimmer.jsx";
import { useParams,useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/logo.jpg";

const Invite = ()=>{
    const [users,setUsers] = useState("");
    const [details,setDetails] = useOutletContext();

    const {id} = useParams();
    // id is eventID

    // we are retreiving all the users
    const getUsers = async()=>{
        const accessToken= await Refresh();
        const userId  = sessionStorage.getItem('id');
    
        const config = {
          headers:{
            'authorization' : `Bearer ${accessToken}`
          }
        }
    
        try {
          const response = await axios.get("https://eventwizard-backend.onrender.com/user",config);
          const usersArray = response?.data?.users;
          const filtered = usersArray.filter((item)=> item?._id!==userId);
          setUsers(filtered);
        } catch (error) {
          console.error(error);
        }
      }
    
      
      // sent invitations to users
    const sendInvitation = async(_id)=>{
        const accessToken= await Refresh();
        // console.log(accessToken);

        const config = {
          headers:{
            'authorization' : `Bearer ${accessToken}`
          }
        }
        try {
          const response = await axios.post(`http://localhost:3000/invites/${id}`,
          {
            "userId":_id
          },config);
          // console.log(response);
          toast(response?.data?.message);
        } catch (error) {
          console.log(error);
        }

    };

    const handleClick = (_id)=>{
        // console.log("user id is");
        // console.log(_id);
        // console.log("clicked");
        sendInvitation(_id);
    }
    
    useEffect(()=>{
      getUsers();
    },[]);

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
          <Shimmer/>
          <Shimmer/>
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

      const showUsers=()=>(
        <div className="flex flex-row flex-wrap justify-center items-center gap-20  py-10">
        {users.map(({ _id, email, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white w-96 flex flex-col justify-center items-center gap-5">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={logo} alt="Guest Image" className="w-20 h-20 rounded-full pt-2" />
              <p className="py-5 text-2xl md:text-xl">NAME: {name.toUpperCase()}</p>
              <p className="text-lg">EmailId : {email}</p>
            </div>
            <button
              className=" px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
              onClick={()=>handleClick(_id)}
              >Invite Users
            </button>
          </div>
        ))}
    </div>
      )
    

    return(
        <div className="w-full h-full bg-color6  ">
            {users.length===0 ? shimmerui() : showUsers()}
            {/* {sentUsers} */}
        </div>
    )
}

export default Invite;