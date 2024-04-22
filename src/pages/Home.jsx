import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeView from '../components/HomeView'

const Home = () => {
  return (
    <div className="flex bg-black h-screen w-screen">
      <div className=''>
      <Sidebar />
      </div>
    <div className="">
      <HomeView/>
    </div>
    </div>
    
    

  )
}

export default Home
