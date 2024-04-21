
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Investments from './pages/Investments'
import AddData from './pages/AddData'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/expenses' element={<Expenses />}/>
      <Route path='/investments' element={<Investments />}/>
      <Route path='/adddata' element={<AddData />}/>
    </Routes>
  )
}

export default App
