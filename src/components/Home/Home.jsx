import React from 'react'

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