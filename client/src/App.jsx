import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PhoneDetails from './pages/PhoneDetails'
import NavBar from './components/NavBar'



function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:id' element={<PhoneDetails />} />
    </Routes>
    </>
  )
}

export default App
