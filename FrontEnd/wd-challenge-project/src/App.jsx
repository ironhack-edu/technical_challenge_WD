import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import PhonesList from './components/PhonesList'

function App() {

  return (
    <>
    <Routes>
      <Route path="/phones" element={<PhonesList/>}/>
    </Routes>
     </>
  )
}

export default App
