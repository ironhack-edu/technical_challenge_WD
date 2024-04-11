import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import PhoneDetailPage from './pages/PhoneDetailPage'


import { Routes, Route, Navigate } from 'react-router-dom'



function App() {
  

  return (
    <div>
    <Routes>
    <Route path="/" element={<Navigate to="/homepage" />} />
    <Route path="/homepage" element={<HomePage/>} />
    <Route path="/details" element={<PhoneDetailPage />} />
    


    </Routes>



    </div>
  )
}

export default App
