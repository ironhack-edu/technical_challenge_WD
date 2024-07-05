import { Route, Routes } from 'react-router-dom'
import './App.css'
import PhoneDetails from './pages/PhoneDetails'



function App() {

  return (
    <>
    <Routes>
      <Route path='/:id' element={<PhoneDetails />} />
    </Routes>
    </>
  )
}

export default App