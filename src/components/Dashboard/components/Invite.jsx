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

    const handleChange = (e)=>{
      console.log(e.target.value);
  
      setSearchText(e.target.value);
    }
  
    const handleSubmit = ()=>{
      const filtered = users.filter((item)=> item?.name.toUpperCase().includes(searchText.toUpperCase()));
      setFilteredUsers(filtered);
    }

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
        {filteredUsers.map(({ _id, email, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white w-96 flex flex-col justify-center items-center gap-5">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={logo} alt="Guest Image" className="w-32 h-32 rounded-full pt-2" />
              <p className="py-5 text-5xl md:text-3xl italic font-medium  antialiased">NAME: {name.toUpperCase()}</p>
              <p className="text-2xl italic antialiased">EmailId : {email}</p>
            </div>
            <button
              className=" px-6 py-3 m-4 text-center text-xl text-white rounded-lg duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
              onClick={()=>handleClick(_id)}
              >Invite Users
            </button>
          </div>
        ))}
    </div>
      )
    

    return(
        <div className="w-full h-full bg-gray-200  ">

            <div className='flex flex-row gap-10 pt-10 justify-center'>
               <input 
                  type="text" 
                  name="users"
                  value={searchText}
                  autoComplete="off"
                  placeholder="Search for Users"
                  className='h-11 w-96 rounded-md text-color1 focus:outline-none  text-lg pl-3 placeholder-gray-500'
                  onChange={handleChange}
                />
                <button 
                  className="w-40 px-6  text-center text-xl rounded-lg text-white duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
                  onClick={handleSubmit}>
                  Search
                </button>
            </div>
            {users.length===0 ? shimmerui() : showUsers()}
            

            
        </div>
    )
}

export default Invite;