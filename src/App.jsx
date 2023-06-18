// import { useState } from 'react'
import Signup from "./components/Signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import {ToastContainer} from "react-toastify";
import {Routes,Route} from "react-router-dom";
import ProtectedAuthRoute from "./utils/ProtectedAuthRoute";
import ProtectedUserRoute from "./utils/ProtectedUserRoute.jsx";
import Profile from "./components/Home/components/Profile.jsx";
import Dashboard from "./components/LandingPage/main.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import EventCreation from "./components/Home/components/EventCreation.jsx";
import Services from "./components/LandingPage/Services.jsx";
import Contact from "./components/LandingPage/Contact.jsx";
import Dash from "./components/Dashboard/Dashboard.jsx";
import Details from "./components/Dashboard/components/Details.jsx";
import Guests from "./components/Dashboard/components/Guests.jsx";
import HandleInvitaions from "./components/Home/components/Invitations/handleInvitations.jsx";
import Invite from "./components/Dashboard/components/Invite.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Dashboard/>}>
            <Route index element={
              <ProtectedAuthRoute>
                <LandingPage/>
              </ProtectedAuthRoute>
            } />
            <Route path="services" element={
              <ProtectedAuthRoute>
                <Services/>
              </ProtectedAuthRoute>
            } />
            <Route path="contact" element={
              <ProtectedAuthRoute>
                <Contact/>
              </ProtectedAuthRoute>
            } />
            <Route
              path="login"
              element={<ProtectedAuthRoute>
                <Login />
              </ProtectedAuthRoute>}
            />
            <Route path="signup" element={
                <ProtectedAuthRoute>
                  <Signup />
                </ProtectedAuthRoute>} />
        </Route>
            
        <Route path="/home" element={
          <ProtectedUserRoute>
            <Home/>
          </ProtectedUserRoute>
          }/>
        
        <Route path="/invitations" element={
          <ProtectedUserRoute>
            <HandleInvitaions/>
          </ProtectedUserRoute>
          }/>

        <Route path="/profile" element={
          <ProtectedUserRoute>
            <Profile/>
          </ProtectedUserRoute>
          }/>

          <Route path="/event-creation" element={
          <ProtectedUserRoute>
            <EventCreation/>
          </ProtectedUserRoute>
          }/>

        <Route path="/dash/:id" element={<Dash/>}>
            <Route index element={
              <ProtectedUserRoute>
                <Details/>
              </ProtectedUserRoute>
            } />
            <Route
              path="guests"
              element={<ProtectedUserRoute>
                <Guests/>
              </ProtectedUserRoute>}
            />
            <Route
              path="invite_users"
              element={<ProtectedUserRoute>
                <Invite/>
              </ProtectedUserRoute>}
            />
        </Route>

        
          {/* If none of the above routes are matched, show 404 */}
          <Route path="*" element={<h1>404 Not Found</h1>} />

          
        </Routes>
    </>
  )
}

export default App