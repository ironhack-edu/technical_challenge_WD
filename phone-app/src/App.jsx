import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";
import { Router } from "express";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>hello world</h1>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />


      </div>
    </Router>
  );
}

export default App;
