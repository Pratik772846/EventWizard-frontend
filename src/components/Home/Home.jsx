// import React from 'react'
import { useBearStore } from '../../store/index';
const Home = () => {
  const store = useBearStore();
  console.log(store.isAuthenticated);
  return (
    <div>Home</div>
  )
}

export default Home