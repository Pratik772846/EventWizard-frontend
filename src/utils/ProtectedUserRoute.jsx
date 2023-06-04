// import React from 'react'
import { useBearStore } from "../store/index.js";
import {Navigate, useLocation} from "react-router-dom"

const ProtectedUserRoute = ({children}) => {
    const state = useBearStore();
    let location = useLocation();
    const auth = sessionStorage.getItem('isAuthenticated');
    if(auth!==null){
        state.isAuthenticated = auth;
    }
    
    // return (
    //     auth ? <Outlet/> : <Navigate to='/' state={{from:location}} replace/>
    // )
    if(!auth) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
    return children

};

export default ProtectedUserRoute;