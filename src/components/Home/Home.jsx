// import React from 'react'
import Navbar from './components/Navbar.jsx'
import PublicEvents from './components/PublicEvents.jsx'
import Cards from './components/Cards.jsx'
import Footer from '.././Footer/Footer.jsx'
import Divider from './components/Divider.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import Invitations from './components/Invitations.jsx'

import { useBearStore } from '../../store/index';

const Home = () => {
  const store = useBearStore();
  console.log(store.isAuthenticated);
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <CreateEvent />
      <Divider />
      <br />
      <PublicEvents />
      <Invitations/>
      <Divider />
      <br />
      <Cards />
      <Divider />
      <br />
      
      <Footer />
    </div>
  )
}

export default Home