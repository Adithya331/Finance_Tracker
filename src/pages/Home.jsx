import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeView from '../components/HomeView'

const Home = () => {

  // added a small functionality to print the current path. we can ad this functionality after adding all the pages 

  // const data = {
  //   home: 'Home',
  //   expenses: 'Expenses'
  // }

  // var curr_pathh = window.location.pathname;
  // curr_pathh = pathh.substring(1,);
  // console.log('the path is',data[curr_path]);

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
