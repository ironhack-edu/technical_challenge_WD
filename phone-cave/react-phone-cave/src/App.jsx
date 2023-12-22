import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage.jsx'
import Phones from './Pages/Phones.jsx';

function App() {
  
  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<Phones />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
