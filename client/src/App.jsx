import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage/index.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes> 
    </div>
  )
}

export default App
