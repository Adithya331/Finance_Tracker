
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import AddData from './pages/AddData'
import Investments from './pages/Investments'

function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/adddata" element={<AddData />}/>
      <Route path="/investments" element={<Investments />}/>
      
    </Routes>
  )
}

export default App
