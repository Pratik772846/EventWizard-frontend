import {useState,useEffect} from 'react';
import axios from "axios";
import Shimmer from '../../Shimmer/Shimmer';

const Profile = ({userId}) => {

  const [user,setUser] = useState();

  const getDetails = async()=>{

    const refreshToken = sessionStorage.getItem('refreshToken');
    const refresh = await axios.post("http://localhost:3000/tokens/refresh",{
        refreshToken:refreshToken
    });
    const accessToken = refresh?.data?.token;
    console.log(accessToken);

    const config = {
      headers:{
        'authorization' : `Bearer ${accessToken}`
      }
    }

    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`,{
      },config);
      console.log(response);
      setUser(response?.data?.user);
      console.log(user);
      // console.log(response?.data?.events);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getDetails();
  },[]);
  useEffect(()=>{
    console.log(user);
  },[user]);


  const shimmerui = ()=>(
    <div className='flex flex-wrap justify-center items-center pb-12'>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
    </div>
  )

  const showUser =()=>(
    <div className="grid gap-8 md:grid-cols-3 sm:px-8 ">
          <span>{user?.name}</span>
          <span>{user?.email}</span>
          <span>{user?.phone}</span>


    </div>
  )
  
  // if(!user) return null;

  return (
    <div  className="mb-4 text-white bg-color6 max-w-[1300px] m-auto">
      <div className="flex flex-col w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pt-10  text-center">
          <h2 className="uppercase py-6 text-center md:text-2xl tracking-[20px] text-black">User Profile</h2>
        </div>
        {user===undefined?shimmerui():showUser()}
      </div>
    </div>
  );
};

export default Profile;
