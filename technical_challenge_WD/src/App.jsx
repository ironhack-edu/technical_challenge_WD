import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import PhoneDetailsPage from './pages/PhoneDetailsPage';
import PhonesListPage from './pages/PhonesListPage';
// import ErrorPage from './pages/ErrorPage';
// import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';


function App() {
  

  return (
    <div className="App">
        <AppNavbar />

        <div className="container">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhonesListPage />} />
            <Route path="/phones/:phoneId" element={<PhoneDetailsPage />} />

            {/* <Route path="/error" element={<ErrorPage />} />
            <Route path="/*" element={<NotFoundPage />} /> */}

          </Routes>
        </div>


    </div>
      
   
  )
}

export default App
