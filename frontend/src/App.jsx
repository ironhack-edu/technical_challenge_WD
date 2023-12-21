import "./App.css";
import PhoneDetail from "./Pages/PhoneDetail";
import Phonelisting from "./Pages/Phonelisting";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";

function App() {
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
