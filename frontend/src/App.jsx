import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import PhoneDetails from "./pages/PhoneDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone/:phoneId" element={<PhoneDetails />} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
