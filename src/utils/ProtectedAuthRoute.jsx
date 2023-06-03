// import React from 'react'
import { useBearStore } from "../store/index.js";
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const state = useBearStore();
    console.log(state.isAuthenticated);
    let location = useLocation();

    if(state.isAuthenticated) {
        return <Navigate to="/home" state={{ from: location}} replace />
    }
    return children

};

export default ProtectedRoute;