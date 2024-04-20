import HomeView from "../components/HomeView"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex h-screen w-full bg-black gap-2 ">
        <Sidebar />

        <HomeView />

    </div>
  )
}

export default Home
