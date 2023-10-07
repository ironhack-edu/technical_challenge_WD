import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phones from './components/Phones';
import PhoneDetails from './components/PhoneDetails';
import Home from './components/Home';
import Header from './components/Header';


import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Routes>
        <Route path="/phones" element={<Phones/>} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
