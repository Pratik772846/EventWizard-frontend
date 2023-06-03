// import React from 'react'
import { useBearStore } from "../store/index.js";
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const state = useBearStore();
    let location = useLocation();
    const auth = localStorage.getItem('isAuthenticated');
    console.log(auth);
    if(auth!== null){
        state.isAuthenticated = auth;
    }
    console.log(state.isAuthenticated);
    if(state.isAuthenticated) {
        return <Navigate to="/home" state={{ from: location}} replace />
    }
    return children

};

export default ProtectedRoute;