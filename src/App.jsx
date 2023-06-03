// import { useState } from 'react'
import Signup from "./components/Signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import {ToastContainer} from "react-toastify";
import {Routes,Route} from "react-router-dom";
import ProtectedAuthRoute from "./utils/ProtectedAuthRoute";
import ProtectedUserRoute from "./utils/ProtectedUserRoute.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <Routes>
          <Route exact path="/" element={
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
        </Routes>
    </>
  )
}

export default App
