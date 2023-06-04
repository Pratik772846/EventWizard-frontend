import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Cards from '../Cards'
import PublicEvents from '../PublicEvents'
import Divider from '../Divider'

const Home = () => {
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