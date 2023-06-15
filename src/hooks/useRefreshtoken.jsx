// import { useEffect } from "react";
import axios from "axios";

const Refresh =async()=>{
    try {
        
    const refreshToken = sessionStorage.getItem('refreshToken');
    console.log(refreshToken);
    const refresh = await axios.post("https://eventwizard-backend.onrender.com/tokens/refresh",{
        refreshToken:refreshToken
    });
    const val = refresh?.data?.token;
    // console.log(val);
    
    return val;
    } catch (error) {
        console.error(error);
    }
}

export default Refresh;