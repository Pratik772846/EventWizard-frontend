import Refresh from "../../../hooks/useRefreshtoken.jsx";
import axios from "axios";
import { useEffect,useState } from "react";
import Shimmer from "../../Shimmer/Shimmer.jsx";

const Invite = ()=>{
    const [users,setUsers] = useState("");
    const getUsers = async()=>{
        const accessToken= await Refresh();
        console.log(accessToken);
    
        const userId  = sessionStorage.getItem('id');
        console.log(userId);
    
        const config = {
          headers:{
            'authorization' : `Bearer ${accessToken}`
          }
        }
    
        try {
          const response = await axios.get("https://eventwizard-backend.onrender.com/user",config);
          console.log(response);
          console.log(response?.data);
          setUsers(response?.data?.users);
        } catch (error) {
          console.error(error);
        }
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
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
        </div>
      )

      const showUsers=()=>(
        <div className="grid gap-8 md:grid-cols-3 sm:px-8 py-8">
        {users.map(({ _id, email, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white h-52 flex flex-col justify-center items-center gap-5">
            <div className="text-center ">
              <p className="py-5 text-2xl md:text-xl">{name}</p>
              <p className="text-lg">{email}</p>
              <p className="text-lg">description:</p>
            </div>
            <button
              className="w-1/3 px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
              >Invite Users
            </button>
          </div>
        ))}
    </div>
      )
    

    return(
        <div className="w-full bg-color3 mt-7 ">
            {users.length===0 ? shimmerui() : showUsers()}
        </div>
    )
}

export default Invite;