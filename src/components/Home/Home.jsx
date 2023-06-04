import React from 'react'
import Navbar from '../Navbar.jsx'
import PublicEvents from '../PublicEvents.jsx'
import Cards from '../Cards.jsx'
import Footer from '../Footer.jsx'
import Divider from '../Divider.jsx'
import { useBearStore } from '../../store/index';

const Home = () => {
  const store = useBearStore();
  console.log(store.isAuthenticated);
  return (
    <div>
      <Navbar />
      <PublicEvents />
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