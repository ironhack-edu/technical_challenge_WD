import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import PhoneListPage from './pages/PhoneListPage';
import HomePage from './pages/HomePage';
import PhoneDetailsPage from './pages/PhoneDetailsPage';

function App() {

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/phones" element={<PhoneListPage />} />
        <Route exact path="/phones/:phoneId" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App;
