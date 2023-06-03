// import React from 'react'
import { useBearStore } from "../store/index.js";
import {Navigate, useLocation} from "react-router-dom"

const ProtectedUserRoute = ({children}) => {
    const state = useBearStore();
    let location = useLocation();
    const auth = localStorage.getItem('isAuthenticated');
    state.isAuthenticated = auth;
    if(!auth) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
    return children

};

export default ProtectedUserRoute;