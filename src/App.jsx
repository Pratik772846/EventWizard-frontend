// import { useState } from 'react'
import Signup from "./components/Signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import {ToastContainer} from "react-toastify";
import {Routes,Route} from "react-router-dom";
import ProtectedAuthRoute from "./utils/ProtectedAuthRoute";
import ProtectedUserRoute from "./utils/ProtectedUserRoute.jsx";
import Profile from "./components/Home/components/Profile.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/" element={
            <ProtectedAuthRoute>
              <LandingPage/>
            </ProtectedAuthRoute>
          }>

          </Route>
          <Route path="/signup" element={
            <ProtectedAuthRoute>
                <Signup/>
            </ProtectedAuthRoute>
            } />
          <Route path="/login" element={
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>} />
            
          <Route path="/home" element={
            <ProtectedUserRoute>
              <Home/>
            </ProtectedUserRoute>
            }/>

          <Route path="/profile" element={
            <ProtectedUserRoute>
              <Profile/>
            </ProtectedUserRoute>
            }/>
        </Routes>
    </>
  )
}

export default App