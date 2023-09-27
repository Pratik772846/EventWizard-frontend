import Refresh from "../../../hooks/useRefreshtoken.jsx";
import axios from "axios";
import { useEffect,useState } from "react";
import Shimmer from "../../Shimmer/Shimmer.jsx";
import { useParams,useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/img.avif";

const Invite = ()=>{
    const [users,setUsers] = useState("");
    // const [events,setEvents] = useState("");
    const [filteredUsers,setFilteredUsers] = useState("");
    const [searchText,setSearchText] = useState("");
    // const [details,setDetails] = useOutletContext();

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
          setFilteredUsers(filtered);
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
          const response = await axios.post(`https://eventwizard-backend.onrender.com/invites/${id}`,
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

    const handleChange = (e)=>{
      console.log(e.target.value);
  
      setSearchText(e.target.value);
    }
  
    const handleSubmit = ()=>{
      const filtered = users.filter((item)=> item?.name.toUpperCase().includes(searchText.toUpperCase()));
      setFilteredUsers(filtered);
    }

    const shimmerui = ()=>(
        <div className='flex flex-wrap items-center justify-center pb-12'>
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
        <div className="flex flex-row flex-wrap items-center justify-center gap-20 py-10">
        {filteredUsers.map(({ _id, email, name }) => (
          <div key={_id} className="flex flex-col items-center justify-center gap-5 bg-white rounded-lg shadow-md shadow-gray-600 w-96">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={logo} alt="Guest Image" className="w-32 h-32 pt-2 rounded-full" />
              <p className="py-5 text-5xl antialiased italic font-medium md:text-3xl">NAME: {name.toUpperCase()}</p>
              <p className="text-2xl antialiased italic">EmailId : {email}</p>
            </div>
            <button
              className="px-6 py-3 m-4 text-xl text-center text-white duration-200 rounded-lg  hover:scale-105 bg-gradient-to-r from-color1 to-color2"
              onClick={()=>handleClick(_id)}
              >Invite Users
            </button>
          </div>
        ))}
    </div>
      )
    

    return(
        <div className="w-full h-full bg-gray-200 ">

            <div className='flex flex-row justify-center gap-10 pt-10'>
               <input 
                  type="text" 
                  name="users"
                  value={searchText}
                  autoComplete="off"
                  placeholder="Search for Users"
                  className='pl-3 text-lg placeholder-gray-500 rounded-md h-11 w-96 text-color1 focus:outline-none'
                  onChange={handleChange}
                />
                <button 
                  className="w-40 px-6 text-xl text-center text-white duration-200 rounded-lg hover:scale-105 bg-gradient-to-r from-color1 to-color2"
                  onClick={handleSubmit}>
                  Search
                </button>
            </div>
            {users.length===0 ? shimmerui() : showUsers()}
            

            
        </div>
    )
}

export default Invite;