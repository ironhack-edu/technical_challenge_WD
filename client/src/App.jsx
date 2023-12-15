import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllPhones from './pages/AllPhones/AllPhones.jsx'
import Detail from './pages/Detail/Detail.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<AllPhones />} />
        <Route path="/phone/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
