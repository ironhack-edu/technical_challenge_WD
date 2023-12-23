import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  return (
     <div>

      <Routes>
          <Route path="/" element={<Homepage/>} />
         
          <Route path="/phoneDetails/:phoneId" element={<PhoneDetails/>} />
        </Routes>
     </div>
  )
}

export default App
