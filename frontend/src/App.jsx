import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import AllPhones from './Components/AllPhones'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/phones" element={<AllPhones/>}/>
      </Routes>
    </div>
  )
}

export default App
