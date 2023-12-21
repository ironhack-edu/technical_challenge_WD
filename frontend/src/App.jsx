import { useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import Phonelisting from "./Pages/Phonelisting";
import PhoneDetail from "./Pages/PhoneDetail";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phonelisting />} />
          <Route path="/phones/:id" element={<PhoneDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
