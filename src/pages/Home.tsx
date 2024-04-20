import HomeView from "../components/HomeView"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex h-screen w-full ">
        <Sidebar />

        <HomeView />

    </div>
  )
}

export default Home
