// import { useState } from 'react'
import Signup from "./components/Signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import {ToastContainer} from "react-toastify";
import {Routes,Route} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const Username="Pranav";

  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
