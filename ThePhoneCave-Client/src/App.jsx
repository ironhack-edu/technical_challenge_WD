import Navbar from "../components/Navbar";

import "./App.css";
import PhonesList from "../components/PhoneList";
import { Routes, Route } from "react-router-dom";
import PhoneDetails from "../components/PhoneDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PhonesList/>} />
        <Route path="/phones/:id" element={<PhoneDetails/>}/>
      </Routes>
    </>
  );
}
